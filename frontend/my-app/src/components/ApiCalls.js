const Api = Object.create({}, {
    GetDoctors: {
        value: () => { 
            return fetch("http://localhost:5000/api/doctors", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => res.json())
        }
    },
    GetAvailableSlots: {
        value: () => {
            return fetch("http://localhost:5000/api/slots", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then(res => res.json())
        }
    },
    CreatePatient: {
        value: (firstName, lastName, dateOfBirth, phoneNumber, email) => {
            return fetch("http://localhost:5000/api/patients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    FirstName: firstName,
                    LastName: lastName,
                    DateOfBirth: dateOfBirth,
                    PhoneNumber: phoneNumber,
                    Email: email  
                })
            })
            .then(res => res.json())
        }
    },
    BookAppointment: {
        value: (slotId, slot, doctor, patient) => {
            return fetch(`http://localhost:5000/api/slots/${slotId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    SlotId: slot.slotId,
                    StartTime: new Date(slot.startTime),
                    EndTime: new Date(slot.endTime),
                    IsBooked: true,
                    IdDoctor: doctor.doctorId,
                    Doctor: doctor,
                    IdPatient: patient.patientId,
                    Patient: patient 
                })
            })
        }
    }
})
export default Api;