import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectDetails } from "@/lib/actions/project.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const { userId } = auth();
  const clerkUser = await clerkClient.users.getUser(userId as string);
  const user_id = String(clerkUser.publicMetadata.userId);
  const currentUser = await getUserById(user_id);

  if (!currentUser) redirect("/");

  const project = await getProjectDetails(id);

  if (!project)
    return <p className="no-result-text">Failed to fetch project info</p>;

  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>

      <ProjectForm type="edit" user={currentUser} project={project} />
    </Modal>
  );
};

export default EditProject;
