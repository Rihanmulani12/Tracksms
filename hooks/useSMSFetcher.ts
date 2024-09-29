
import { useState, useEffect } from 'react';
import SmsAndroid from 'react-native-get-sms-android';

export interface SmsMessage {
  id: string;
  address: string;
  body: string;
  date: number; 
}

export const useSMSFetcher = () => {
  const [messages, setMessages] = useState<SmsMessage[]>([]);
  const [bankMessages, setBankMessages] = useState<SmsMessage[]>([]);
  const [amountMessages, setAmountMessages] = useState<SmsMessage[]>([]);
  const [groceryMessages, setGroceryMessages] = useState<SmsMessage[]>([]);

  const fetchSMS = () => {
    const filter = {
      box: 'inbox',
      maxCount: 10,
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => console.log('Failed to fetch SMS:', fail),
      (count, smsList) => {
        const parsedMessages: SmsMessage[] = JSON.parse(smsList);
        setMessages(parsedMessages);

        const bankMessages = parsedMessages.filter(item => item.address.includes('Bank'));
        const amountFilterRegex = /(₹\s*500|Rs\s*500|500\s*rupees)/i;
        const amountFilterMessages = bankMessages.filter(item => amountFilterRegex.test(item.body));

        setBankMessages(bankMessages);
        setAmountMessages(amountFilterMessages);
        setGroceryMessages(parsedMessages.filter(item => item.address.includes('Grocery')));
      },
    );
  };

  useEffect(() => {
    fetchSMS();
  }, []);

  return { messages, bankMessages, amountMessages, groceryMessages };
};
