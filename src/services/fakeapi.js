let messagesData = [
  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },
  { id: 3, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Same here. Just finished work.", sentAt: new Date(), seen: true },
  { id: 4, conversationId: 2490, sender: { id: 2, name: "Jane Smith" }, text: "How's it going?", sentAt: new Date(), seen: true },
  { id: 5, conversationId: 2490, sender: { id: 100, name: "Stevam" }, text: "Pretty good, thanks! How about You?", sentAt: new Date(), seen: true },
  { id: 6, conversationId: 2490, sender: { id: 2, name: "Jane Smith" }, text: "I'm doing well, just busy with some projects.", sentAt: new Date(), seen: true },
  { id: 7, conversationId: 3470, sender: { id: 3, name: "Sarah Connor" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 8, conversationId: 3470, sender: { id: 100, name: "Stevam" }, text: "Not much, just relaxing. How about You?", sentAt: new Date(), seen: true },
  { id: 9, conversationId: 3470, sender: { id: 3, name: "Sarah Connor" }, text: "Same here. Just finished watching a movie.", sentAt: new Date(), seen: true },
  { id: 10, conversationId: 4856, sender: { id: 100, name: "Stevam" }, text: "How's it going?", sentAt: new Date(), seen: true },
  { id: 11, conversationId: 4856, sender: { id: 4, name: "Michael Johnson" }, text: "Pretty good, thanks! How about You?", sentAt: new Date(), seen: true },
  { id: 12, conversationId: 4856, sender: { id: 100, name: "Stevam" }, text: "I'm doing well, just busy with some work.", sentAt: new Date(), seen: true },
  { id: 13, conversationId: 5217, sender: { id: 5, name: "Emily Davis" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 14, conversationId: 5217, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },
  { id: 15, conversationId: 5217, sender: { id: 5, name: "Emily Davis" }, text: "Same here. Just finished reading a book.", sentAt: new Date(), seen: true },
  { id: 16, conversationId: 6290, sender: { id: 100, name: "Stevam" }, text: "How's it going?", sentAt: new Date(), seen: true },
  { id: 17, conversationId: 6290, sender: { id: 6, name: "Chris Brown" }, text: "Pretty good, thanks! How about You?", sentAt: new Date(), seen: true },
  { id: 18, conversationId: 6290, sender: { id: 100, name: "Stevam" }, text: "I'm doing well, just busy with some projects.", sentAt: new Date(), seen: true },
  { id: 19, conversationId: 7892, sender: { id: 7, name: "Kate Williams" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 20, conversationId: 7892, sender: { id: 100, name: "Stevam" }, text: "Not much, just relaxing. How about You?", sentAt: new Date(), seen: true },
  { id: 21, conversationId: 7892, sender: { id: 7, name: "Kate Williams" }, text: "Same here. Just finished cooking dinner.", sentAt: new Date(), seen: true },
  { id: 22, conversationId: 8167, sender: { id: 100, name: "Stevam" }, text: "How's it going?", sentAt: new Date(), seen: true },
  { id: 23, conversationId: 8167, sender: { id: 8, name: "David Miller" }, text: "Pretty good, thanks! How about You?", sentAt: new Date(), seen: true },
  { id: 24, conversationId: 8167, sender: { id: 100, name: "Stevam" }, text: "I'm doing well, just busy with some work.", sentAt: new Date(), seen: true },
  { id: 25, conversationId: 9185, sender: { id: 9, name: "Samantha Lee" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 26, conversationId: 9185, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },
  { id: 27, conversationId: 9185, sender: { id: 9, name: "Samantha Lee" }, text: "Same here. Just finished watching a show.", sentAt: new Date(), seen: true },
  { id: 28, conversationId: 10723, sender: { id: 13, name: "Olivia Clark" }, text: "How's it going?", sentAt: new Date(), seen: true },
  { id: 29, conversationId: 10723, sender: { id: 100, name: "Stevam" }, text: "Pretty good, thanks! How about You?", sentAt: new Date(), seen: true },
  { id: 30, conversationId: 10723, sender: { id: 13, name: "Olivia Clark" }, text: "I'm doing well, just busy with some projects.", sentAt: new Date(), seen: true },
  { id: 31, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "What did You work on today?", sentAt: new Date(), seen: true },
  { id: 32, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Just some reports and meetings.", sentAt: new Date(), seen: true },
  { id: 33, conversationId: 2490, sender: { id: 100, name: "Stevam" }, text: "What kind of projects are You working on?", sentAt: new Date(), seen: true },
  { id: 34, conversationId: 2490, sender: { id: 2, name: "Jane Smith" }, text: "Mostly web development and design.", sentAt: new Date(), seen: true },
  { id: 35, conversationId: 3470, sender: { id: 100, name: "Stevam" }, text: "What movie did You watch?", sentAt: new Date(), seen: true },
  { id: 36, conversationId: 3470, sender: { id: 3, name: "Sarah Connor" }, text: "It was a sci-fi movie. Really enjoyed it!", sentAt: new Date(), seen: true },
  { id: 37, conversationId: 4856, sender: { id: 4, name: "Michael Johnson" }, text: "What are You working on?", sentAt: new Date(), seen: true },
  { id: 38, conversationId: 4856, sender: { id: 100, name: "Stevam" }, text: "Just some coding and debugging.", sentAt: new Date(), seen: true },
  { id: 39, conversationId: 5217, sender: { id: 100, name: "Stevam" }, text: "What book are You reading?", sentAt: new Date(), seen: true },
  { id: 40, conversationId: 5217, sender: { id: 5, name: "Emily Davis" }, text: "It's a mystery novel. Really gripping!", sentAt: new Date(), seen: true },
  { id: 41, conversationId: 6290, sender: { id: 6, name: "Chris Brown" }, text: "What projects are You busy with?", sentAt: new Date(), seen: true },
  { id: 42, conversationId: 6290, sender: { id: 100, name: "Stevam" }, text: "Mostly backend development and APIs.", sentAt: new Date(), seen: true },
  { id: 43, conversationId: 7892, sender: { id: 100, name: "Stevam" }, text: "What did You cook for dinner?", sentAt: new Date(), seen: true },
  { id: 44, conversationId: 7892, sender: { id: 7, name: "Kate Williams" }, text: "I made pasta with a homemade sauce.", sentAt: new Date(), seen: true },
  { id: 45, conversationId: 8167, sender: { id: 8, name: "David Miller" }, text: "What kind of work are You doing?", sentAt: new Date(), seen: true },
  { id: 46, conversationId: 8167, sender: { id: 100, name: "Stevam" }, text: "Mostly frontend development and UI design.", sentAt: new Date(), seen: true },
  { id: 47, conversationId: 9185, sender: { id: 100, name: "Stevam" }, text: "What show did You watch?", sentAt: new Date(), seen: true },
  { id: 48, conversationId: 9185, sender: { id: 9, name: "Samantha Lee" }, text: "It was a new series on Netflix. Really good!", sentAt: new Date(), seen: true },
  { id: 49, conversationId: 10723, sender: { id: 100, name: "Stevam" }, text: "What projects are keeping You busy?", sentAt: new Date(), seen: true },
  { id: 50, conversationId: 10723, sender: { id: 13, name: "Olivia Clark" }, text: "Mostly data analysis and reporting.", sentAt: new Date(), seen: true },
  { id: 51, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "How's Your day going?", sentAt: new Date(), seen: true },
  { id: 52, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "It's been good, just a bit busy.", sentAt: new Date(), seen: true },
  { id: 53, conversationId: 2490, sender: { id: 2, name: "Jane Smith" }, text: "Do You have any plans for the weekend?", sentAt: new Date(), seen: true },
  { id: 54, conversationId: 2490, sender: { id: 100, name: "Stevam" }, text: "Not yet, maybe just relax at home.", sentAt: new Date(), seen: true },
  { id: 55, conversationId: 3470, sender: { id: 3, name: "Sarah Connor" }, text: "Have You seen any good movies lately?", sentAt: new Date(), seen: true },
  { id: 56, conversationId: 3470, sender: { id: 100, name: "Stevam" }, text: "Not recently, any recommendations?", sentAt: new Date(), seen: true },
  { id: 57, conversationId: 4856, sender: { id: 4, name: "Michael Johnson" }, text: "How's the coding going?", sentAt: new Date(), seen: true },
  { id: 58, conversationId: 4856, sender: { id: 100, name: "Stevam" }, text: "It's going well, just a few bugs to fix.", sentAt: new Date(), seen: true },
  { id: 59, conversationId: 5217, sender: { id: 5, name: "Emily Davis" }, text: "Do You like reading mystery novels?", sentAt: new Date(), seen: true },
  { id: 60, conversationId: 5217, sender: { id: 100, name: "Stevam" }, text: "Yes, I love them! Any good ones to recommend?", sentAt: new Date(), seen: true },


  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?", sentAt: new Date(), seen: true },  { id: 1, conversationId: 1489, sender: { id: 1, name: "John Doe" }, text: "Hey, what's up?", sentAt: new Date(), seen: true },
  { id: 2, conversationId: 1489, sender: { id: 100, name: "Stevam" }, text: "Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?Not much, just chilling. You?", sentAt: new Date(), seen: true },
];

let conversationsData = [
  { id: 1489, participants: [{ id: 1, name: "John Doe" }, { id: 100, name: "Stevam" }], lastMessage: { id: 1, senderId: 100, text: "Hey, what's up?" }, createdAt: new Date() },
  { id: 2490, participants: [{ id: 2, name: "Jane Smith" }, { id: 100, name: "Stevam" }], lastMessage: { id: 2, senderId: 2, text: "How's it going?" }, createdAt: new Date() },
  { id: 3470, participants: [{ id: 3, name: "Sarah Connor" }, { id: 100, name: "Stevam" }], lastMessage: { id: 3, senderId: 3, text: "Hey, what's up?" }, createdAt: new Date() },
  { id: 4856, participants: [{ id: 4, name: "Michael Johnson" }, { id: 100, name: "Stevam" }], lastMessage: { id: 4, senderId: 100, text: "How's it going?" }, createdAt: new Date() },
  { id: 5217, participants: [{ id: 5, name: "Emily Davis" }, { id: 100, name: "Stevam" }], lastMessage: { id: 5, senderId: 5, text: "Hey, what's up?" }, createdAt: new Date() },
  { id: 6290, participants: [{ id: 6, name: "Chris Brown" }, { id: 100, name: "Stevam" }], lastMessage: { id: 6, senderId: 100, text: "How's it going?" }, createdAt: new Date() },
  { id: 7892, participants: [{ id: 7, name: "Kate Williams" }, { id: 100, name: "Stevam" }], lastMessage: { id: 7, senderId: 7, text: "Hey, what's up?" }, createdAt: new Date() },
  { id: 8167, participants: [{ id: 8, name: "David Miller" }, { id: 100, name: "Stevam" }], lastMessage: { id: 8, senderId: 100, text: "How's it going?" }, createdAt: new Date() },
  { id: 9185, participants: [{ id: 9, name: "Samantha Lee" }, { id: 100, name: "Stevam" }], lastMessage: { id: 9, senderId: 9, text: "Hey, what's up?" }, createdAt: new Date() },
  { id: 10723, participants: [{ id: 13, name: "Olivia Clark" }, { id: 100, name: "Stevam" }], lastMessage: { id: 10, senderId: 13, text: "How's it going?" }, createdAt: new Date() }
]

export const fakeApi = {

  getOnlineFriends: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Smith" },
          { id: 3, name: "Sarah Connor" },
          { id: 4, name: "Michael Johnson" },
          { id: 5, name: "Emily Davis" },
          { id: 6, name: "Chris Brown" },
          { id: 7, name: "Kate Williams" },
          { id: 8, name: "David Miller" },
          { id: 9, name: "Samantha Lee" },
          { id: 10, name: "James Taylor" },
          { id: 11, name: "Laura Wilson" },
          { id: 12, name: "Daniel Harris" },
          { id: 13, name: "Olivia Clark" },
          { id: 14, name: "Matthew Lewis" },
          { id: 15, name: "Sophia Walker" }
        ]);
      }, 500);
    }),

  getConversations: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const conversations = conversationsData;
        resolve(conversations);
      }, 500);
    }),

  getConversationByUser: (userId) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const filteredConversations = conversationsData.filter((conversation) =>
          conversation.participants.some((participant) => participant.id === userId)
        );
        resolve(filteredConversations[0]);
      }, 500);
    }),

  getMessages: (conversationId) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const filteredMessages = messagesData.filter(msg => msg.conversationId === conversationId);
        resolve(filteredMessages);
      }, 500);
    }),

  pushMessages: (newMessage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        messagesData.push(newMessage);
        resolve(newMessage);
      }, 5);
    });
  },

  pushConversations: (newconversation) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        newconversation.id = Date.now();
        conversationsData.push(newconversation);
        resolve(newconversation);
      }, 5);
    });
  },

};
