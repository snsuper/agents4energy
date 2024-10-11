// https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html
export function request(ctx) {
  const { prompt, agentId, agentAliasId, sessionId} = ctx.args;

  return {
    resourcePath: `/agents/${agentId}/agentAliases/${agentAliasId}/sessions/${sessionId}/text`,
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        inputText: prompt,
      },
    },
  };
}

export function response(ctx) {
  return {
    body: ctx.result.body,
  };
}
