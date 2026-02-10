import API from './axios'; 

// =======================
// TYPES (OPTIONAL BUT GOOD)
// =======================

export interface CreateResumePayload {
  templateKey: string; // modern_1, classic_2
  objective?: string;
}

export interface Resume {
  id: string;
  templateKey: string;
  objective: string;
  createdAt: string;
  updatedAt: string;
}

// =======================
// RESUME (MAIN)
// =======================

// Create new resume with complete data
export const createResume = async (payload: any) => {
  const res = await API.post('/resumes', payload);
  return res.data;
};

// Get all resumes created by logged-in user (for "My Resumes")
export const getMyResumes = async (): Promise<any[]> => {
  const res = await API.get('/resumes');
  return res.data.resumes || [];
};

// Get full resume data (for preview / edit)
export const getResumeById = async (resumeId: string) => {
  const res = await API.get(`/resumes/${resumeId}`);
  return res.data;
};

// Update resume
export const updateResume = async (resumeId: string, payload: any) => {
  const res = await API.put(`/resumes/${resumeId}`, payload);
  return res.data;
};

// Delete resume
export const deleteResume = async (resumeId: string) => {
  const res = await API.delete(`/resumes/${resumeId}`);
  return res.data;
};
