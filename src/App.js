// import react-dropdown feature from react library
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './styles/app.module.css';

function App() {
  //define option for dropdown
  const options = [
    'Yes', 'Probably Not'
  ];
  const defaultOption = "Select"
  
  // return the content to show the user which includes dropdown
  return (
    <div className={styles.content}>
      <div className={styles.heading}>Should You use a Dropdown ?</div>
      <Dropdown className={styles.Dropdown} options={options}  value={defaultOption} placeholder="Select an option" />
    </div>
  );
}

export default App;
