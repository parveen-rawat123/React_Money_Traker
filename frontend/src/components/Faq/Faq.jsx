import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function AccordionExpandIcon() {
  return (
    <div className=' py-12'>
      <h1 className=' text-center text-5xl font-bold text-[#1b374c]'>FAQ </h1>
      <p className='text-center pt-4 font-semibold text-lg text-[#1b374c]'>   Any Questions? Look Here </p>
    <div className='flex flex-col px-8   py-16 lg:px-32 gap-20 lg:flex-row'>
      <div className='flex-1 flex flex-col gap-12'>
        <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className='text-[#7dc8e3]' />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Typography>What is Expense Tracker?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Expense Tracker is your go-to personal finance buddy! It&apos;s an app where you can keep track of your income, expenses, and even helps you build a savings habit and manage personal debts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className='text-[#7dc8e3]' />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Is the data secure?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! Your data is exclusively yours no one else can access it. All data is stored on your device. We don&apos;t collect or manage your data.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='flex-1 flex flex-col gap-12'>
        <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className='text-[#7dc8e3]' />}
            aria-controls="panel3-content"
            id="panel3-header"
            >
            <Typography>Why do we need to track our expenses?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tracking your expenses can help you understand your spending, control your budget, and achieve better financial awareness.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className='text-[#7dc8e3]' />}
            aria-controls="panel4-content"
            id="panel4-header"
            >
            <Typography>Can I add custom categories?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Absolutely! You can add, delete, and even customize categories with a fun mix of icons and colors.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
            </div>
  );
}
