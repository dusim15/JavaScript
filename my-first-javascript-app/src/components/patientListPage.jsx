import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
interface Patient {
  id: number;
  firstName: string;
  surname: string;
  middleName: string;
  dateOfBirth: string;
  homeAddress: string;
  dateOfRegistration: string;
  hasMatriculationNumber: boolean;
}
{
  this.id = id;
  this.firstName = firstName;
  this.surname = surname;
  this.middleName = middleName;
  this.dateOfBirth = dateOfBirth;
  this.homeAddress = homeAddress;
  this.dateOfRegistration = dateOfRegistration;
  this.hasMatriculationNumber = hasMatriculationNumber;
}
*/
const PatientListPage = () => {
  const [patients, setPatients] = useState<Patient>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPatient, setNewPatient] = useState<Patient>({
    id: 0,
    firstName: '',
    surname: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateOfRegistration: '',
    hasMatriculationNumber: false,
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const handleAddPatient = async () => {
    try {
      await axios.post('/api/patients', newPatient);
      setNewPatient({
        id: 0,
        firstName: '',
        surname: '',
        middleName: '',
        dateOfBirth: '',
        homeAddress: '',
        dateOfRegistration: '',
        hasMatriculationNumber: false,
      });
      setShowAddForm(false);
      fetchPatients();
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Date of Birth</th>
            <th>Home Address</th>
            <th>Date of Registration</th>
            <th>Has Matriculation Number</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.surname}</td>
              <td>{patient.middleName}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.homeAddress}</td>
              <td>{patient.dateOfRegistration}</td>
              <td>{patient.hasMatriculationNumber ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setShowAddForm(true)}>Add Patient</button>

      {showAddForm && (
        <div>
          <h2>Add New Patient</h2>
          <form onSubmit={handleAddPatient}>
            {/* Add form fields for each patient detail */}
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PatientListPage;
