export const controlStyles = {
  border: '0',
  boxShadow: 'none',
  '&:hover': {
    borderColor: 'none',
  },
  '&:active': {
    outline: 'none',
  },
  backgroundColor: '#fff',
  color: '#000',
  cursor: 'pointer',
  fontWeight: '600',
  textAlign: 'start',
  width: '100%',
  height: '10px',
  borderRadius: '5px',
  border: '1px solid rgba(0,0,0,0.1)',
  boxShadow: '0px 0px 2px rgb(0,0,0,0.1)',
};

export const menuStyles = {
  //   maxHeight: 150,
  //   overflow: 'auto',
  //   scrollbarWidth: 'thin',
};

export const optionStyles = {
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  height: '32px',
  paddingInline: '15px',
  fontWeight: '500',
  textAlign: 'start',
  '&:hover': {
    color: '#FF8541',
  },
};

export const selectStyles = {
  option: (provided, state) => ({
    ...optionStyles,
    color: state.isSelected ? '#FF8541' : 'black',
    background: state.isSelected ? 'linear-gradient(to right, #FFEBE0 , #FFF4EE);' : '#fff',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '2px',
      backgroundColor: state.isSelected ? '#FF8541' : '#fff',
    },
  }),
  menuList: (provided, state) => ({
    ...provided,
    maxHeight: 200,
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgb(0,0,0,0.1)',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgb(255,133,65,0.6)',
      borderRadius: '8px',
      hight: '2px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: 'rgb(255,133,65)',
    },
  }),
  control: (provided, state) => ({
    ...provided,
    ...controlStyles,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#000',
    borderRadius: '16px',
  }),
  dropdownIndicator: base => ({
    ...base,
    color: 'black',
    '&:hover': {
      color: 'black',
    },
  }),
};