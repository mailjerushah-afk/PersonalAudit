import type { User } from "../types/User";
import { styles } from "../styles/GlobalStyles";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {

  return (
    <div>

      <h2 style={styles.sectionTitle}>Users</h2>

      {users.length === 0 && <p>No users yet</p>}

      <div style={styles.userGrid}>

        {users.map(user => (

          <div key={user.id} style={styles.userCard}>

            <strong>{user.fullName}</strong>

            <span>{user.email}</span>

          </div>

        ))}

      </div>

    </div>
  );
}