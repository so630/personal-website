import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import {useState} from "react";

export default function App() {

    const [selection, setSelection] = useState('profile');
    const [done, setDone] = useState(false);

    return (
        <>
            <Menu setSelection={setSelection}  />
            {selection === 'profile' && <Profile setDone={setDone} done={done} />}
        </>
    )
}
