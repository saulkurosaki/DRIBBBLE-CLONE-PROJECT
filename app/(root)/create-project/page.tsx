import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const CreateProject = async () => {
  const { userId } = auth();
  const clerkUser = await clerkClient.users.getUser(userId as string);
  const user_id = String(clerkUser.publicMetadata.userId);
  const user = await getUserById(user_id);

  if (!user) {
    redirect("/");
  }

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProjectForm type="create" user={user} />
    </Modal>
  );
};

export default CreateProject;
