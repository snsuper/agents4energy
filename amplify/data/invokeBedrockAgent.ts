// // https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html
// // https://socket.dev/npm/package/@smithy/eventstream-serde-universal
// import { EventStreamSerdeContext, SerdeContext } from '@smithy/types';
// import { EventStreamMarshaller } from '@smithy/eventstream-serde-universal';
// // import { EventStreamCodec } from '@smithy/eventstream-codec';
// import { Readable } from 'stream';

// import { Context } from '@aws-appsync/utils'
// import { Schema } from './resource';

// // // Create a function to parse the event stream
// // async function parseEventStream(
// //     inputStream: Readable,
// //     context: SerdeContext
// //   ): Promise<MyEvent[]> {
// //     const eventStreamCodec = new EventStreamCodec(context);
// //     const events: MyEvent[] = [];
  
// //     for await (const chunk of inputStream) {
// //       const message = eventStreamCodec.decode(chunk);
      
// //       // Process the message
// //       const myEvent: MyEvent = {
// //         type: message.headers['event-type']?.value as string,
// //         data: JSON.parse(message.body.toString()),
// //       };
// //       events.push(myEvent);
// //     }
  
// //     return events;
// //   }

// export function request(ctx: Context<Schema['invokeBedrockAgent']['args']>) {
// 	const { prompt, agentId, agentAliasId, sessionId} = ctx.args;
  
//     return {
//       resourcePath: `/agents/${agentId}/agentAliases/${agentAliasId}/sessions/${sessionId}/text`,
//       method: "POST",
//       params: {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: {
//           inputText: prompt,
//         },
//       },
//     };
// }

// export function response(ctx: any ) {
//     const marshaller = new EventStreamMarshaller({});

//     const contents: any = {}

//     const data: any = ctx.result.body;



// 	return {
//         body: ctx.result.body,
//       };
// }