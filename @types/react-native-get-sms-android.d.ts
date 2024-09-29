declare module 'react-native-get-sms-android' {
    export interface Sms {
      id: string;
      thread_id: string;
      address: string;
      body: string;
      date: number;
      type: number;
      read: number;
      status: number;
      seen: number;
    }
  
    export default {
      list(
        filter: string,
        fail: (error: any) => void,
        success: (count: number, smsList: string) => void,
      ): void;
  
      // Add more methods as needed
    };
  }
  