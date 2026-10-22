import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { portfolioContent } from '../src/data/content.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generatePDF() {
  console.log('Generating ATS-Friendly 1-Page PDF CV...');
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // ATS Palette: Deep Forest Green & Muted Green
  const colorForest = rgb(0.12, 0.22, 0.11); // #1f381c
  const colorMuted = rgb(0.31, 0.44, 0.28);  // #4f7047
  const colorRule = rgb(0.61, 0.75, 0.56);   // #9bc08f
  const colorBody = rgb(0.16, 0.26, 0.15);   // #294226

  let cursorY = height - 42;
  const marginX = 46;
  const contentWidth = width - marginX * 2;

  // 1. NAME
  page.drawText(portfolioContent.personalInfo.name, {
    x: marginX,
    y: cursorY,
    size: 20,
    font: fontBold,
    color: colorForest,
  });
  cursorY -= 17;

  // 2. SUBTITLE
  page.drawText(`${portfolioContent.personalInfo.role} — ${portfolioContent.education.institution}`, {
    x: marginX,
    y: cursorY,
    size: 10.5,
    font: fontRegular,
    color: colorMuted,
  });
  cursorY -= 14;

  // 3. CONTACT ROW
  const contactText = `${portfolioContent.personalInfo.email}   |   ${portfolioContent.personalInfo.github}   |   ${portfolioContent.personalInfo.location}`;
  page.drawText(contactText, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorForest,
  });
  cursorY -= 8;

  // Top dividing line
  page.drawLine({
    start: { x: marginX, y: cursorY },
    end: { x: width - marginX, y: cursorY },
    thickness: 1.2,
    color: colorForest,
  });
  cursorY -= 14;

  const drawSectionHeader = (title: string) => {
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: colorForest,
    });
    cursorY -= 4;
    page.drawLine({
      start: { x: marginX, y: cursorY },
      end: { x: width - marginX, y: cursorY },
      thickness: 0.75,
      color: colorRule,
    });
    cursorY -= 10;
  };

  // 4. EDUCATION SECTION
  drawSectionHeader('Education');
  
  page.drawText(portfolioContent.education.degree, {
    x: marginX,
    y: cursorY,
    size: 9.5,
    font: fontBold,
    color: colorForest,
  });
  const dateText = portfolioContent.education.period;
  const dateWidth = fontRegular.widthOfTextAtSize(dateText, 8.5);
  page.drawText(dateText, {
    x: width - marginX - dateWidth,
    y: cursorY,
    size: 8.5,
    font: fontRegular,
    color: colorMuted,
  });
  cursorY -= 12;

  page.drawText(`${portfolioContent.education.institution}, ${portfolioContent.education.location}`, {
    x: marginX,
    y: cursorY,
    size: 8.5,
    font: fontOblique,
    color: colorMuted,
  });
  cursorY -= 12;

  for (const highlight of portfolioContent.education.highlights.slice(0, 2)) {
    page.drawText(`•  ${highlight}`, {
      x: marginX + 8,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorBody,
    });
    cursorY -= 10;
  }
  
  const courseStr = `Key Coursework: ${portfolioContent.education.coursework.join(', ')}`;
  page.drawText(`•  ${courseStr}`, {
    x: marginX + 8,
    y: cursorY,
    size: 8,
    font: fontRegular,
    color: colorBody,
  });
  cursorY -= 14;

  // 5. TECHNICAL SKILLS SECTION
  drawSectionHeader('Technical Skills');
  for (const cat of portfolioContent.skills) {
    const skillList = cat.skills.map(s => s.name).join(', ');
    page.drawText(`${cat.name}:`, {
      x: marginX + 8,
      y: cursorY,
      size: 8.5,
      font: fontBold,
      color: colorForest,
    });
    page.drawText(skillList, {
      x: marginX + 130,
      y: cursorY,
      size: 8.5,
      font: fontRegular,
      color: colorBody,
    });
    cursorY -= 11.5;
  }
  cursorY -= 6;

  // 6. PROJECTS SECTION
  drawSectionHeader('Selected Academic & Technical Projects');
  
  for (const project of portfolioContent.projects) {
    page.drawText(project.title, {
      x: marginX,
      y: cursorY,
      size: 9.5,
      font: fontBold,
      color: colorForest,
    });
    
    const metaStr = `${project.tools.slice(0, 3).join(', ')}  |  ${project.year}`;
    const metaWidth = fontRegular.widthOfTextAtSize(metaStr, 8);
    page.drawText(metaStr, {
      x: width - marginX - metaWidth,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorMuted,
    });
    cursorY -= 11;

    // One-line summary
    page.drawText(`•  ${project.summary}`, {
      x: marginX + 8,
      y: cursorY,
      size: 8,
      font: fontRegular,
      color: colorBody,
    });
    cursorY -= 10;

    // Learning / Highlight
    if (project.learnings.length > 0) {
      page.drawText(`•  Learnings: ${project.learnings[0]}`, {
        x: marginX + 8,
        y: cursorY,
        size: 8,
        font: fontRegular,
        color: colorBody,
      });
      cursorY -= 11;
    }
    cursorY -= 3;
  }

  // 7. FOOTER NOTE
  cursorY = 24;
  page.drawLine({
    start: { x: marginX, y: cursorY + 10 },
    end: { x: width - marginX, y: cursorY + 10 },
    thickness: 0.5,
    color: colorRule,
  });

  const footerLeft = `Nanda Krishna C — Portfolio & ATS CV (Single source of truth: content.ts)`;
  const footerRight = `Last Updated: ${portfolioContent.personalInfo.lastUpdated}`;
  page.drawText(footerLeft, {
    x: marginX,
    y: cursorY,
    size: 7.5,
    font: fontRegular,
    color: colorMuted,
  });
  const footerRightWidth = fontRegular.widthOfTextAtSize(footerRight, 7.5);
  page.drawText(footerRight, {
    x: width - marginX - footerRightWidth,
    y: cursorY,
    size: 7.5,
    font: fontRegular,
    color: colorMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const pdfPath = path.resolve(publicDir, 'Nanda-Krishna-C-CV.pdf');
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log(`Saved PDF to: ${pdfPath} (${pdfBytes.length} bytes)`);
}

async function generateDOCX() {
  console.log('Generating ATS-Friendly DOCX CV...');
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              bottom: 720,
              left: 900,
              right: 900,
            },
          },
        },
        children: [
          new Paragraph({
            text: portfolioContent.personalInfo.name,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.LEFT,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${portfolioContent.personalInfo.role} — ${portfolioContent.education.institution}`,
                color: '4A6B44',
                size: 20,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${portfolioContent.personalInfo.email}  |  ${portfolioContent.personalInfo.github}  |  ${portfolioContent.personalInfo.location}`,
                size: 18,
              }),
            ],
            border: {
              bottom: {
                color: '2F4A2A',
                space: 6,
                style: BorderStyle.SINGLE,
                size: 12,
              },
            },
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: portfolioContent.education.degree, bold: true }),
              new TextRun({ text: `\t${portfolioContent.education.period}` }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${portfolioContent.education.institution}, ${portfolioContent.education.location}`,
                italics: true,
              }),
            ],
          }),
          ...portfolioContent.education.highlights.map(
            (hl) =>
              new Paragraph({
                bullet: { level: 0 },
                text: hl,
              })
          ),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_2,
          }),
          ...portfolioContent.skills.map(
            (cat) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${cat.name}: `, bold: true }),
                  new TextRun({ text: cat.skills.map((s) => s.name).join(', ') }),
                ],
              })
          ),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'PROJECTS',
            heading: HeadingLevel.HEADING_2,
          }),
          ...portfolioContent.projects.flatMap((proj) => [
            new Paragraph({
              children: [
                new TextRun({ text: proj.title, bold: true }),
                new TextRun({ text: ` (${proj.tools.join(', ')}) — ${proj.year}` }),
              ],
            }),
            new Paragraph({
              bullet: { level: 0 },
              text: proj.summary,
            }),
            new Paragraph({
              bullet: { level: 0 },
              text: `Learnings: ${proj.learnings.join('; ')}`,
            }),
          ]),
          new Paragraph({ text: '' }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Last Updated: ${portfolioContent.personalInfo.lastUpdated} | Generated from content.ts`,
                size: 16,
                color: '5E7D58',
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const docxPath = path.resolve(publicDir, 'Nanda-Krishna-C-CV.docx');
  fs.writeFileSync(docxPath, buffer);
  console.log(`Saved DOCX to: ${docxPath}`);
}

async function main() {
  try {
    await generatePDF();
    await generateDOCX();
    console.log('CV generation completed successfully!');
  } catch (err) {
    console.error('Failed to generate CV:', err);
    process.exit(1);
  }
}

main();
