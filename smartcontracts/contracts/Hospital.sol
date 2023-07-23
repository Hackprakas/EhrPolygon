// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hospital {
    address public admin;
    
    struct HospitalInfo {
        string name;
        address hospitalAddress;
    }

    struct Doctor {
        string name;
        address doctorAddress;
        uint256 hospitalIndex; // Index of the hospital in the hospitals array
    }

    struct Patient {
        string name;
        uint256 age;
        uint256 height;     // Height of the patient (in cm)
        uint256 weight;     // Weight of the patient (in kg)
        uint256 aadharNo;   // Aadhar number of the patient
        string patientAddress;
        uint256 hospitalIndex; // Index of the hospital in the hospitals array
        string medicalReport;
        string prescription;
        string doctorname;
    }

    HospitalInfo[] public hospitals;
    Doctor[] public doctors;
    Patient[] public patients;
    mapping(address =>bool) public isPatient;
    mapping(address =>bool) public isDoctor;

    // Modifier to restrict access to the admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can perform this operation");
        _;
    }
    modifier onlyPatient(){
        require(isPatient[msg.sender],"you are not a registered patient");
        _;
    }
    modifier onlyDoctor(){
        require(isDoctor[msg.sender],"you are not a registered doctor");
        _;
    }

    // Modifier to check if the sender is a registered hospital
    modifier onlyHospital() {
        bool isHospital = false;
        for (uint256 i = 0; i < hospitals.length; i++) {
            if (hospitals[i].hospitalAddress == msg.sender) {
                isHospital = true;
                break;
            }
        }
        require(isHospital, "You are not a registered hospital");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    event hospitalDetails(string name, address hospitalAddress);

    // Function to add a new hospital with name and address
    function addHospital(string memory _name, address _hospitalAddress) public onlyAdmin {
        hospitals.push(HospitalInfo({
            name: _name,
            hospitalAddress: _hospitalAddress
        }));
        emit hospitalDetails(_name, _hospitalAddress);
    }

    event doctorDetails(string name, address doctorAddress, uint256 hospitalIndex);

    // Function to add a new doctor with name, address, and hospital index
    function addDoctor(string memory _name, address _doctorAddress, uint256 _hospitalIndex) public onlyHospital {
        require(_hospitalIndex < hospitals.length, "Invalid hospital index");
        doctors.push(Doctor({
            name: _name,
            doctorAddress: _doctorAddress,
            hospitalIndex: _hospitalIndex
        }));
        isDoctor[_doctorAddress]=true;
        emit doctorDetails(_name, _doctorAddress, _hospitalIndex);
    }

    event patientDetails(string name, uint256 age, uint256 height, uint256 weight, uint256 aadharno, string patientAddress);

    // Function for patients to add their details
    function addPatientDetails(string memory _name, uint256 _age, uint256 _height, uint256 _weight, uint256 _aadharNo,string memory _patientaddress) public {
       
        // require(doctorIndex < doctors.length, "Doctor not found");
      
        patients.push(Patient({
            name: _name,
            age: _age,
            height: _height,
            weight: _weight,
            aadharNo: _aadharNo,
            patientAddress: _patientaddress,
            hospitalIndex: 0, // Set a default value for now
            medicalReport: "",
            prescription: "",
            doctorname:""
        }));
        emit patientDetails(_name, _age, _height, _weight, _aadharNo, _patientaddress);
    }

    
    function addMedicalRecord(uint256 _patientIndex, string memory _medicalReport, string memory _prescription) public onlyDoctor {
        require(_patientIndex < patients.length, "Invalid patient index");
       
        Doctor memory doctor;
        for (uint256 i = 0; i < doctors.length; i++) {
            if (doctors[i].doctorAddress == msg.sender) {
                doctor = doctors[i];
                break;
            }
        }

        patients[_patientIndex].medicalReport = _medicalReport;
        patients[_patientIndex].prescription = _prescription;
        patients[_patientIndex].doctorname = doctor.name;
    }

    function getHospitalCount() public view returns (uint256) {
        return hospitals.length;
    }

    function getHospitalByIndex(uint256 index) public view returns (string memory, address) {
        require(index < hospitals.length, "Invalid hospital index");
        return (hospitals[index].name, hospitals[index].hospitalAddress);
    }
    function getDoctorCount() public view returns (uint256) {
        return doctors.length;
    }

    function getDoctorByIndex(uint256 index) public view returns (
        string memory, address, string memory
    ) {
        require(index < doctors.length, "Invalid doctor index");
        Doctor memory doctor = doctors[index];
        HospitalInfo memory hospital = hospitals[doctor.hospitalIndex];
        return (doctor.name, doctor.doctorAddress, hospital.name);
    }

    function getPatientCount() public view returns (uint256) {
        return patients.length;
    }
   function getPatientDetailsByName(string memory _name) public view returns (
    string[] memory names,
    uint256[] memory ages,
    uint256[] memory heights,
    uint256[] memory weights,
    uint256[] memory aadharNos,
    string[] memory medicalReports,
    string[] memory prescriptions,
    string[] memory doctornames
) {
    uint256 count = 0;
    for (uint256 i = 0; i < patients.length; i++) {
        if (keccak256(bytes(patients[i].name)) == keccak256(bytes(_name))) {
            count++;
        }
    }

    names = new string[](count);
    ages = new uint256[](count);
    heights = new uint256[](count);
    weights = new uint256[](count);
    aadharNos = new uint256[](count);
    medicalReports = new string[](count);
    prescriptions = new string[](count);
    doctornames = new string[](count);

    uint256 index = 0;
    for (uint256 i = 0; i < patients.length; i++) {
        if (keccak256(bytes(patients[i].name)) == keccak256(bytes(_name))) {
            names[index] = patients[i].name;
            ages[index] = patients[i].age;
            heights[index] = patients[i].height;
            weights[index] = patients[i].weight;
            aadharNos[index] = patients[i].aadharNo;
            medicalReports[index] = patients[i].medicalReport;
            prescriptions[index] = patients[i].prescription;
            doctornames[index] = patients[i].doctorname;
            index++;
        }
    }

    return (names, ages, heights, weights, aadharNos, medicalReports, prescriptions, doctornames);
}

    function getPatientDetailsByAadhar(uint256 _aadharNo) public view returns (
    string[] memory names,
    uint256[] memory ages,
    uint256[] memory heights,
    uint256[] memory weights,
    string[] memory medicalReports,
    string[] memory prescriptions,
    string[] memory doctorNames
) {
    uint256 count = 0;
    for (uint256 i = 0; i < patients.length; i++) {
        if (patients[i].aadharNo == _aadharNo) {
            count++;
        }
    }

    names = new string[](count);
    ages = new uint256[](count);
    heights = new uint256[](count);
    weights = new uint256[](count);
    medicalReports = new string[](count);
    prescriptions = new string[](count);
    doctorNames = new string[](count);

    uint256 index = 0;
    for (uint256 i = 0; i < patients.length; i++) {
        if (patients[i].aadharNo == _aadharNo) {
            names[index] = patients[i].name;
            ages[index] = patients[i].age;
            heights[index] = patients[i].height;
            weights[index] = patients[i].weight;
            medicalReports[index] = patients[i].medicalReport;
            prescriptions[index] = patients[i].prescription;
            doctorNames[index] = patients[i].doctorname;
            index++;
        }
    }

    return (names, ages, heights, weights, medicalReports, prescriptions, doctorNames);
}

   }