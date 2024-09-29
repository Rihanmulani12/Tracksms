export interface SmsMessage {
    id: number; // Adjust type based on how you're identifying messages
    address: string; // Sender address (phone number, etc.)
    body: string; // The content of the SMS
    date: string; // Date/time the message was received
  }