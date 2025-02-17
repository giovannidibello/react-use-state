// Main.jsx

import { useState } from 'react'
import languages from '../data/Languages';

// importo componenti bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(null)

    return (
        <>
            <main>
                <h1>Learn Web Development</h1>

                <div className="ms-5 mt-5">

                    {languages.map(language =>
                        <Button onClick={() => setSelectedLanguage(language.id)} key={language.id} variant={language.id === selectedLanguage ? "warning" : "primary"} className="me-4">{language.title}
                        </Button>)}

                    <Card className="mt-5 me-5">
                        <Card.Body>
                            <Card.Title>
                                {languages.find(language => language.id === selectedLanguage)?.title}
                            </Card.Title>
                            <Card.Text>
                                {selectedLanguage ? languages.find(language => language.id === selectedLanguage)?.description : "Nessun linguaggio selezionato"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </main>
        </>
    )
}


