import React, {useState} from "react";
import styled from "styled-components";

function Preferences({preferences, user, onPreferenceUpdate}){

    const [education, setEducation] = useState(false)
    const [recreational, setRecreational] = useState(false)
    const [social, setSocial] = useState(false)
    const [diy, setDiy] = useState(false)
    const [charity, setCharity] = useState(false)
    const [cooking, setCooking] = useState(false)
    const [relaxation, setRelaxation] = useState(false)
    const [music, setMusic] = useState(false)
    const [busywork, setBusywork] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        async function getDeletePreferences() {
            await fetch(`/delete_preferences`,{
                method: "DELETE",
            })
        }
        async function postEducation() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 1
                }),
            })
        }
        async function postRecreational() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 2
                }),
            })
        }
        async function postSocial() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 3
                }),
            })
        }
        async function postDiy() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 4
                }),
            })
        }
        async function postCharity() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 5
                }),
            })
        }
        async function postCooking() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 6
                }),
            })
        }
        async function postRelaxation() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 7
                }),
            })
        }
        async function postMusic() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 8
                }),
            })
        }
        async function postBusywork() {
                    const r = await fetch("/user_preferences",{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    preference_id: 9
                }),
            })
        }
        async function getPreferences() {
            const r = await fetch("/preferences")
            if (r.ok) {
              r.json().then(() => onPreferenceUpdate())
            }
          }


        getDeletePreferences();
        if (education) {
            postEducation();
        }
        if (recreational) {
            postRecreational();
        }
        if (social) {
            postSocial();
        }
        if (diy) {
            postDiy();
        }
        if (charity) {
            postCharity();
        }
        if (cooking) {
            postCooking();
        }
        if (relaxation) {
            postRelaxation();
        }
        if (music) {
            postMusic();
        }
        if (busywork) {
            postBusywork();
        }
        getPreferences();
        

        // for (const data in formData) {
        //     if (formData[data]) {
                
        //         async function postPreference() {
        //             const r = await fetch("/user_preferences",{
        //                 method: "POST",
        //                 headers: {
        //                   "Content-Type": "application/json",
        //                 },
        //                 body: JSON.stringify({
        //                     preference_id: data
        //                 }),
        //               })
        //         }
        //         postPreference();
        //     }
        // }
        
    }

    return(
        <div>
            <form className = "form" onSubmit={handleSubmit}>
        <label>
        Education
        <input
            type="checkbox"
            name = "education"
            onChange={() => setEducation(!education)}
            value={education}
        />
        </label>
        <br/>
        <label>
        Recreational
        <input
            type="checkbox"
            name = "recreational"
            onChange={() => setRecreational(!recreational)}
            value={recreational}
        />
        </label>
        <br/>
        <label>
        Social
        <input
            type="checkbox"
            name = "social"
            onChange={() => setSocial(!social)}
            value={social}
        />
        </label>
        <br/>
        <label>
        DIY
        <input
            type="checkbox"
            name = "diy"
            onChange={() => setDiy(!diy)}
            value={diy}
        />
        </label>
        <br/>
        <label>
        Charity
        <input
            type="checkbox"
            name = "charity"
            onChange={() => setCharity(!charity)}
            value={charity}
        />
        </label>
        <br/>
        <label>
        Cooking
        <input
            type="checkbox"
            name = "cooking"
            onChange={() => setCooking(!cooking)}
            value={cooking}
        />
        </label>
        <br/>
        <label>
        Relaxation
        <input
            type="checkbox"
            name = "relaxation"
            onChange={() => setRelaxation(!relaxation)}
            value={relaxation}
        />
        </label>
        <br/>
        <label>
        Music
        <input
            type="checkbox"
            name = "music"
            onChange={() => setMusic(!music)}
            value={music}
        />
        </label>
        <br/>
        <label>
        Busywork
        <input
            type="checkbox"
            name = "busywork"
            onChange={() => setBusywork(!busywork)}
            value={busywork}
        />
        </label>
        <br/>
        <Button type="submit">Submit new preferences</Button>
        </form>
        </div>
    )

}


const Button = styled.button`
  cursor: pointer;
  font-size: 12px;
  background-color: blue;
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  margin: 2px;

`;


export default Preferences