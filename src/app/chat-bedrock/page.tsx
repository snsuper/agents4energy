
'use client'
import React, { useState, useEffect } from 'react';
import { withAuth } from '@/components/WithAuth';
import { amplifyClient } from '@/utils/amplify-utils';

const askBedrock = /* GraphQL */ `
  query AskBedrock($ingredients: [String]) {
    askBedrock(ingredients: $ingredients) {
      body
      error
      __typename
    }
  }
`;

const Page = () => {
    const [bedrockResponse, setBedrockResponse] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await amplifyClient.queries.askBedrock({ ingredients: ['hello', 'world'] });
            setBedrockResponse(JSON.stringify(response));
        };
        fetchData();
    }, [])

    return (
        <div>
            <h1>My Agents</h1>
            {bedrockResponse}
    </div>
    );
};

export default withAuth(Page);