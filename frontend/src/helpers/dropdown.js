import React, { useState } from 'react';

function DropdownBox() {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div>
     
      <select id="role" value={selectedRole} onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="technical">Technical User</option>
        <option value="non-technical">Non-Technical User</option>
      </select>
      {selectedRole && <p>You selected: {selectedRole}</p>}
    </div>
  );
}

export default DropdownBox;