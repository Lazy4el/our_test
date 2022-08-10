export const style = {
  mainContainer: {
    margin: '18px 0',
    maxWidth: '100% !important',
  },
  toolbar: {
    minHeight: '0px !important',
  },
  app: {
    backgroundColor: 'white',
    height: '80px',
    boxShadow: 'none',
  },
  hidden: {
    marginRight: '0',
    width: '60%',
    margin: 'auto',
    display: { xs: 'none', md: 'block' },
    textAlign: 'end',
  },
  nohidden: {
    color: 'black',
    marginRight: '0',
    marginLeft: '0',
    width: 'auto',
    display: { xs: 'block', md: 'none' },
  },
  drawer: {
    display: { xs: 'block', md: 'none' },
    minWidth: '320px',
  },
  drawerIntoIcon: {
    color: 'black',
    margin: '10px 320px 10px 29px',
    cursor: 'pointer',
    ':active': {
      background: '#F1F5F9',
      borderRadius: '100%',
    },
  },
  divider: {
    width: '80%',
    margin: '20px auto',
  },
  drawerIcon: {
    cursor: 'pointer',
  },
  feedbackButton: {
    width: '200px',
    height: '50px',
    display: { xs: 'none', md: 'block' },
    borderRadius: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    background: '#385b95',
    whiteSpace: 'nowrap',
    ':hover, :active': {
      background: '#62caec',
    },
  },

  feedbackButtonAside: {
    width: '200px',
    height: '50px',
    margin: '20px auto auto auto',
    padding: '16px 16px',
    borderRadius: '10px',
    fontSize: '14px',
    lineHeight: '21px',
    background: '#385b95',
    whiteSpace: 'nowrap',
    ':hover, :active': {
      background: '#62caec',
    },
  },
  linkIcons: {
    position: 'absolute',
    right: '30px',
  },
};
