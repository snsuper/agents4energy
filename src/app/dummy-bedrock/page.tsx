
'use client'
import React, { useState, useEffect } from 'react';
import { withAuth } from '@/components/WithAuth';
import { amplifyClient } from '@/utils/amplify-utils';
import type { Schema } from '@/../amplify/data/resource';

type BedrockAnthropicBodyType = {
    id: string;
    type: string;
    role: string;
    model: string;
    content: {
        type: string;
        text: string;
    }[];
    stop_reason: string;
    stop_sequence: null;
    usage: {
        input_tokens: number;
        output_tokens: number;
    };
};

const invokeBedrockParseBodyGetText = async (prompt: string) => {
    console.log('Prompt: ', prompt)
    const response = await amplifyClient.queries.invokeBedrock({ prompt: prompt })
    console.log('Bedrock Response: ', response.data)
    if (!(response.data && response.data.body)) {
        console.log('No response from bedrock after prompt: ', prompt)
        return
    }
    const bedrockResponseBody = JSON.parse(JSON.parse(response.data.body)) as BedrockAnthropicBodyType
    console.log('Bedrock Response Body: ', bedrockResponseBody)
    return bedrockResponseBody.content.map(item => item.text).join('\n')
}

const Page = () => {
    const [bedrockResponseText, setBedrockResponseText] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            setBedrockResponseText(await invokeBedrockParseBodyGetText('Why should energy customers adopt AWS?'))
        };
        fetchData();
    }, [])

    return (
        <div>
            <h1>Sample Bedrock Response</h1>
            {bedrockResponseText ?
                <p>{bedrockResponseText}</p>
                :
                <p>Loading...</p>
            }
        </div>
    );
};

export default withAuth(Page);