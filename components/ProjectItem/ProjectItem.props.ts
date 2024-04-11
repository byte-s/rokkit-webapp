import { ReactNode } from "react";
import { NewProjectType } from "../../types/project";
import { Projects } from '@prisma/client'

export interface ProjectItemProps {
    project: Projects;
}