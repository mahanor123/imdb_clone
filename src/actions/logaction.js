export const logaction = (user) => {
  return {
    type: "SIGNIN",
    payload: user
  };
};
