import React, {useState} from 'react'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

function Calendar() {
    const [date, setDate] = useState()

    return (
        <div>
            <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
        </div>
    )
}

export default Calendar
