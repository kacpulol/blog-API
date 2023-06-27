export function getEnv(envName: string): string {
  const value = process.env[envName];
  if (value) {
    return value;
  } else {
    throw `Could not find environment variable: ${envName}`;
  }
}
