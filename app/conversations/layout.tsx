import getConversations from '../actions/get-conversations';
import Sidebar from '../components/sidebar/sidebar';
import ConversationList from './components/conversation-list';
import getUsers from "@/app/actions/get-users";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers()
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
