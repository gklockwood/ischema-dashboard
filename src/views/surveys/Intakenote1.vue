<template>
    <div class="SchemaMode-Plan-1">
        <div class="container py-4">
            <h3>Initial Psychotherapy Intake Note and Treatment Plan</h3>

            <div class="row">
                <div class="col-md-6 pt-4">
                    <table class="table border">
                        <tbody>
                            <tr>
                                <th scope="row">Clinician</th>
                                <td>George Lockwood, Ph.D.</td>
                            </tr>
                            <tr>
                                <th scope="row">Patient</th>
                                <td>john Appleseed, DOB 11/23/1953</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 pt-2">
                    <table class="table border">
                        <tbody>
                            <tr>
                                <th scope="row">Date and Time</th>
                                <td>January 3, 2022 8:00AM - 9:00AM</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>60 minutes</td>
                            </tr>
                            <tr>
                                <th scope="row">PaService Codetient</th>
                                <td>90837</td>
                            </tr>
                            <tr>
                                <th scope="row">Participants</th>
                                <td>Client only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h4 class="pt-4">Initial Presenting Problem(s)</h4>
            <p>
                What are the primary factors or issues motivating the client to seek help? What significant events,
                symptoms/disorders, problematic emotions or behaviors, or aspects of the client’s life circumstances are
                contributing to his/her problems (e.g. health problems, relationship issues, angry outbursts, an eating
                disorder, substance abuse, work difficulties, stage of life)?
            </p>
            <div>
                <textarea class="form-control" rows="3" placeholder="Elaborate here..."></textarea>
            </div>


            <div class="row">
                <div class="col-md-12 pt-2">
                    <h4 class="pt-4">Current Mental Status</h4>
                    <table class="table border">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>All Normal</th>
                                <th>All Not Assessed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Orientation</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Orientation</option>
                                        <option value="1">X3: Oriented to Person, Place, and Time</option>
                                        <option value="2">X2: Oriented to Person, Place; Impaired to Time</option>
                                        <option value="3">X2: Oriented to Person, Time; Impaired to Place</option>
                                        <option value="1">X2: Oriented to Time, Place; Impaired to Person</option>
                                        <option value="2">X1: Oriented to Person; Impaired to Place, Time</option>
                                        <option value="3">X1: Oriented to Place; Impaired to Person, Time</option>
                                        <option value="1">X1: Oriented to Time; Impaired to Person, Place</option>
                                        <option value="2">XO: Impaired to Person, Place, and Time</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Insight
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Insight</option>
                                        <option value="1">Excellent</option>
                                        <option value="2">Fair</option>
                                        <option value="3">Poor</option>
                                        <option value="2">Nil</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">General Appearance</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>General Appearance</option>
                                        <option value="1">Appropriate</option>
                                        <option value="2">Disheveled</option>
                                        <option value="3">Emaciated</option>
                                        <option value="2">Obese</option>
                                        <option value="3">Poor Hygiene</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Judgment/Impulse Control
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Judgement/Impulse Control</option>
                                        <option value="1">Excellent</option>
                                        <option value="2">Good</option>
                                        <option value="3">Fair</option>
                                        <option value="3">Poor</option>
                                        <option value="3">Nil</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Dress</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Dress</option>
                                        <option value="1">Appropriate</option>
                                        <option value="2">Eccentric</option>
                                        <option value="3">Seductive</option>
                                        <option value="3">Bizarre</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Memory
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Memory</option>
                                        <option value="1">Intact</option>
                                        <option value="2">Poor Remote</option>
                                        <option value="3">Poor Recent</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Motor Activity</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Motor Activity</option>
                                        <option value="1">Unremarkable</option>
                                        <option value="2">Agitation</option>
                                        <option value="3">Retardation</option>
                                        <option value="3">Posturing</option>
                                        <option value="1">Repetitive actions</option>
                                        <option value="2">TiCS</option>
                                        <option value="3">Tremor</option>
                                        <option value="3">Unusual Gait</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Attention/Concentration
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Attention/Concentration</option>
                                        <option value="1">Good</option>
                                        <option value="2">Distractible</option>
                                        <option value="3">Variable</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Interview Behavior</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Interview Behavior</option>
                                        <option value="1">Appropriate</option>
                                        <option value="2">Aggressive</option>
                                        <option value="3">Angry</option>
                                        <option value="1">Apathetic</option>
                                        <option value="2">Argumentative</option>
                                        <option value="3">Child-like</option>
                                        <option value="1">Demanding</option>
                                        <option value="2">Drastic</option>
                                        <option value="3">Evasive</option>
                                        <option value="3">Hostile</option>
                                        <option value="3">Passive</option>
                                        <option value="3">Manipulative</option>
                                        <option value="3">Withdrawn</option>
                                        <option value="3">Uncooperative</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Thought Process
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Thought Process</option>
                                        <option value="1">Unremarkable</option>
                                        <option value="2">Blocking</option>
                                        <option value="3">Circumstantial</option>
                                        <option value="3">Flight of Ideas</option>
                                        <option value="2">Loose Associations</option>
                                        <option value="3">Perseveration</option>
                                        <option value="3">Tangential</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Speech</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Speech</option>
                                        <option value="1">Normal</option>
                                        <option value="2">Hesitant</option>
                                        <option value="3">Pressured</option>
                                        <option value="3">Slurred</option>
                                        <option value="2">Soft</option>
                                        <option value="3">Stuttering</option>
                                        <option value="3">Mute</option>
                                        <option value="3">Verbose</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Thought Content
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Thought Content</option>
                                        <option value="1">Appropriate</option>
                                        <option value="2">Preoccupied</option>
                                        <option value="3">Obsessions</option>
                                        <option value="3">Delusions: Persecutory</option>
                                        <option value="2">Delusions: Bizarre</option>
                                        <option value="3">Delusions: Grandeur</option>
                                        <option value="3">Delusions: Guilt</option>
                                        <option value="3">Delusions: Somatic</option>
                                        <option value="3">Delusions: Ideas of Reference</option>
                                        <option value="3">Delusions: Thought Broadcasting</option>
                                        <option value="3">Delusions: Thought Control</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Mood</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Mood</option>
                                        <option value="1">Euthymic</option>
                                        <option value="2">Dysphoric</option>
                                        <option value="3">Depressed</option>
                                        <option value="3">Euphoric</option>
                                        <option value="2">Grandiose</option>
                                        <option value="3">Anxious</option>
                                        <option value="3">Labile</option>
                                        <option value="3">Irritable</option>
                                        <option value="3">Angry</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Perception
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Perception</option>
                                        <option value="1">Unremarkable</option>
                                        <option value="2">Auditory Hallucinations</option>
                                        <option value="3">Visual Hallucinations</option>
                                        <option value="3">Olfactory Hallucinations</option>
                                        <option value="2">Tactile Hallucinations</option>
                                        <option value="3">Gustatory Hallucinations</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Affect</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Affect</option>
                                        <option value="1">Congruent</option>
                                        <option value="2">Incongruent</option>
                                        <option value="3">Appropriate</option>
                                        <option value="3">Inappropriate</option>
                                        <option value="2">Reactive</option>
                                        <option value="3">Constricted</option>
                                        <option value="3">Blunted</option>
                                        <option value="3">Flat</option>
                                        <option value="3">Not Assessed</option>
                                    </select>
                                </td>
                                <th>
                                    Functional Status
                                </th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Functional Status</option>
                                        <option value="1">Intact</option>
                                        <option value="2">Mildly Impaired</option>
                                        <option value="3">Moderately Impaired</option>
                                        <option value="3">Severely Impaired</option>
                                        <option value="2">Variably Impaired</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block m-0">Risk Assessment </label>
                    <p class="text-muted">
                        (Suicidal ideation, self harm, homicidal ideation, aggression towards others, aggression towards
                        property). Include risk factors and protective factors.
                    </p>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <h3>Initial Biopsychosocial Assessment</h3>
                    <p>
                        (Fill in over the first 1 to 3 sessions)
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">History of Present Problem(s): </label>
                    <textarea class="form-control" rows="3" placeholder="Onset, duration, frequency, etc. "></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Mental Health History</label>
                    <textarea class="form-control" rows="3"
                        placeholder="Prior occurrence of symptoms, diagnoses, outpatient - inpatient treatment, etc. "></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Family Mental Health History</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">History of Trauma</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Current Psychotropic Medications</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Current Medical Conditions</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block m-0">Current Medications</label>
                    <p class="text-muted">
                        Medication, dose, purpose, prescribing physician
                    </p>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Substance Use/abuse</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 pt-4">
                    <label class="form-label fw-bolder d-block">Legal History: </label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 pt-4">
                    <h4>Diagnoses</h4>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Code">
                        <input type="text" class="form-control" placeholder="Description">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Code">
                        <input type="text" class="form-control" placeholder="Description">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Code">
                        <input type="text" class="form-control" placeholder="Description">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Code">
                        <input type="text" class="form-control" placeholder="Description">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <h4>Initial Treatment Plan</h4>
                    <div class="row">
                        <div class="col-md-12 pt-4">
                            <label class="form-label fw-bolded">Goals</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-12 pt-4">
                            <label class="form-label fw-bolded">Objectives</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div class="col-md-12 pt-4">
                            <label class="form-label fw-bolded">Next steps in treatment process</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row pt-4">
                <div class="col-sm">
                    <label class="form-label fw-bolded">[—] Sign this form: I, John Henry, Ph.D., Clinical Psychologist, declare this information is accurate and complete. </label>
                    <input type="text" class="form-control" placeholder="Sign Here...">
                </div>
            </div>


        </div>
        <div class="container my-4">
            <div class="row">
              <div class="col-sm-12 text-center">
                <button type="button" class="btn btn-danger m-2">Reset</button>
                <button type="button" class="btn btn-primary m-2">Submit</button>
              </div>
            </div>
          </div>
    </div>
</template>