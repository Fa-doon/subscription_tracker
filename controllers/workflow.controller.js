import dayjs from 'dayjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url) // to allow us use upsatsh with commonjs
const { serve } = require('@upstash/workflow/express');
import Subscription from '../models/subscription.model.js';

const REMINDERS = [7, 5, 2, 1];
// helper functions
const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', () => {
        return Subscription.findById(subscriptionId).populate({ path: 'user', select: 'name email' })
    })
}

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder ${date}`);

    await context.sleepUntil(label, date.toDate())
}

const triggerReminder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder`);
        // send email or anything you want to run periodically
    })
}

export const sendReminders = serve( async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`);
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');

        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate)
        }

        await triggerReminder(context, `Reminder ${daysBefore} days before`)

    }
})

