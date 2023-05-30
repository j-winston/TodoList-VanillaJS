const uid = (() => {
  const create = () => {
    const uid =
      Date.now().toString(32) + Math.random(16).toString(16).replace(/\./g, "");
    return uid;
  };

  return { create };
})();

export default uid;
