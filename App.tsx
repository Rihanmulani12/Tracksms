import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MessageList } from './components/MessageList';
import { ToggleButton } from './components/ToggleButton';
import { useSMSFetcher } from './hooks/useSMSFetcher';


const App = () => {
  const [showAllMessages, setShowAllMessages] = useState<boolean>(false);
  const [showBankMessages, setShowBankMessages] = useState<boolean>(false);
  const [showAmountMessages, setShowAmountMessages] = useState<boolean>(false);
  const [showGroceryMessages, setShowGroceryMessages] = useState<boolean>(false);

  const { messages, bankMessages, amountMessages, groceryMessages } = useSMSFetcher();

  return (
    <View style={styles.container}>
      <ToggleButton
        title={showAllMessages ? 'Hide All SMS' : 'View All SMS'}
        onPress={() => setShowAllMessages(!showAllMessages)}
      />
      {showAllMessages && <MessageList messages={messages} />}

      <Text style={styles.title}>Bank Messages</Text>
      <ToggleButton
        title={showBankMessages ? 'Hide Bank Expenses' : 'View All Bank Expenses'}
        onPress={() => setShowBankMessages(!showBankMessages)}
      />
      {showBankMessages && <MessageList messages={bankMessages} />}

      <Text style={styles.title}>Messages Containing 500 Rupees</Text>
      <ToggleButton
        title={showAmountMessages ? 'Hide Amount Messages' : 'View Amount Messages'}
        onPress={() => setShowAmountMessages(!showAmountMessages)}
      />
      {showAmountMessages && <MessageList messages={amountMessages} />}

      <Text style={styles.title}>Grocery Messages</Text>
      <ToggleButton
        title={showGroceryMessages ? 'Hide Groceries' : 'View All Groceries'}
        onPress={() => setShowGroceryMessages(!showGroceryMessages)}
      />
      {showGroceryMessages && <MessageList messages={groceryMessages} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
