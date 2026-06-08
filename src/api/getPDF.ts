const getPDF = async (language: string) => {
  const response = await fetch(`/api/pdf/download?language=${language}`);
  const blob = await response.blob();
  return blob;
};

export default getPDF;
