interface UserHomeworkProps {
  userName: string
  charType: string
}

const UserHomework: React.FC<UserHomeworkProps> = ({
  userName,
  charType
}) => {

  return (
    <tr>
      <td className="text-center">{userName}</td>
      <td className="text-center">{charType}</td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
      <td className="text-center"><input className="w-4 h-4" type="checkbox" /></td>
    </tr>
  );
}

export default UserHomework;