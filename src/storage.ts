import type { AppData } from './types';

const STORAGE_KEY = 'trishul-command-centre-v1';

export function loadData(fallback: AppData): AppData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw) as Partial<AppData>;
    const merged = { ...fallback, ...saved } as AppData;
    merged.socialAccounts = Array.isArray(saved.socialAccounts) ? saved.socialAccounts : fallback.socialAccounts;
    merged.tasks = Array.isArray(saved.tasks) ? saved.tasks.map(task => ({
      ...task,
      assignees: Array.isArray(task.assignees) && task.assignees.length ? task.assignees : (task.assignee ? [task.assignee] : []),
    })) : fallback.tasks;
    return merged;
  } catch { return fallback; }
}

export function saveData(data: AppData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function exportData(data: AppData) {
  const backup = {
    app: 'Trishul Racing Command Centre',
    formatVersion: 1,
    exportedAt: new Date().toISOString(),
    data,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' });
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 10);
  anchor.href = objectUrl;
  anchor.download = `trishul-racing-backup-${stamp}.json`;
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}
