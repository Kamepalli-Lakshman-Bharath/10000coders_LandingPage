//  dev | uat | prod
const envType = process.env.NEXT_PUBLIC_env_type;
let envConfig;

switch (envType) {
  case 'dev':
    envConfig = {
      interested_students: 'interested_students_dev',
      notices: 'notices_dev',
      classes: 'classes_dev',
      batch: 'batch_dev',
      projects: 'projects_dev',
      assigned_projects: 'assigned_projects_dev',
      assignments: 'assignments_dev',
      interview_mocks: 'interview_mocks_dev',
      resume_templates: 'resume_templates_dev',
      general_feedback: 'general_feedback_dev',
      // base url will put here
    };
    break;
  case 'uat':
    envConfig = {
      interested_students: 'interested_students_uat',
      notices: 'notices_uat',
      classes: 'classes_uat',
      batch: 'batch_uat',
      projects: 'projects_uat',
      assigned_projects: 'assigned_projects_uat',
      interview_mocks: 'interview_mocks_uat',
      resume_templates: 'resume_templates_uat',
      general_feedback: 'general_feedback_uat',
    };
    break;
  case 'prod':
    envConfig = {
      interested_students: 'interested_students',
      notices: 'notices',
      classes: 'classes',
      batch: 'batch',
      projects: 'projects',
      assigned_projects: 'assigned_projects',
      interview_mocks: 'interview_mocks',
      resume_templates: 'resume_templates',
      general_feedback: 'general_feedback',
    };
    break;
  default:
    throw new Error(`Unsupported environment type: ${envType}`);
}

export {envConfig};
