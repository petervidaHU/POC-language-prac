export type topicName = 'smallTalk' | 'yourself';

export interface topic {
  prompt: string,
  question: string[],
};

export type topicConnector = Record<topicName, topic>;
