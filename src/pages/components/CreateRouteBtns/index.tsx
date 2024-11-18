import Button from '@/components/Button';
import { Box } from '@mui/material';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { wrapper } from '@/pages/components/CreateRouteBtns/styles';

const CreateRouteButtons = () => {
  return (
    <Box sx={wrapper}>
      <Button
        label="Back"
        variant="outlined"
        startIcon={<img src={arrowLeft} alt="backBtn" />}
      />
      <Button
        label={'Next step'}
        variant="colored"
        endIcon={<img src={arrowRight} alt="backBtn" />}
      />
    </Box>
  );
};

export default CreateRouteButtons;
