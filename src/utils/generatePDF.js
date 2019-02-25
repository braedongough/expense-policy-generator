import jsPDF from "jspdf";

const generatePDF = source => {
  const pdf = new jsPDF("p", "cm", "a4");
  pdf.text(source, 2.5, 2.5);
  pdf.save("sickPDF.pdf");
};

export default generatePDF;
