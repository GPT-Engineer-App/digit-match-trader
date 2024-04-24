import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [accountType, setAccountType] = useState("demo");
  const [appId, setAppId] = useState("");
  const [apiToken, setApiToken] = useState("");
  const [volatilityIndex, setVolatilityIndex] = useState("10");
  const [tradeAmount, setTradeAmount] = useState("");
  const [expectedProfit, setExpectedProfit] = useState("");

  const handleTrade = () => {
    // This function would handle the trading logic
    console.log({
      accountType,
      appId,
      apiToken,
      volatilityIndex,
      tradeAmount,
      expectedProfit,
    });
    // Connect to WebSocket and send these details
  };

  return (
    <VStack spacing={4} p={5} bg="brand.900" minHeight="100vh">
      <Text fontSize="2xl" fontWeight="bold">
        Digit Match Trading App
      </Text>
      <FormControl>
        <FormLabel>Account Type</FormLabel>
        <Select placeholder="Select account type" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
          <option value="demo">Demo</option>
          <option value="real">Real</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>App ID</FormLabel>
        <Input placeholder="Enter your App ID" value={appId} onChange={(e) => setAppId(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>API Token</FormLabel>
        <Input placeholder="Enter your API Token" value={apiToken} onChange={(e) => setApiToken(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Volatility Index</FormLabel>
        <Select placeholder="Select Volatility Index" value={volatilityIndex} onChange={(e) => setVolatilityIndex(e.target.value)}>
          <option value="10">Volatility 10 Index</option>
          <option value="25">Volatility 25 Index</option>
          <option value="50">Volatility 50 Index</option>
          <option value="75">Volatility 75 Index</option>
          <option value="100">Volatility 100 Index</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Trade Amount</FormLabel>
        <Input placeholder="Enter trade amount" type="number" value={tradeAmount} onChange={(e) => setTradeAmount(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Expected Profit</FormLabel>
        <Input placeholder="Enter expected profit" type="number" value={expectedProfit} onChange={(e) => setExpectedProfit(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleTrade}>
        Start Trading
      </Button>
    </VStack>
  );
};

export default Index;
