<template>
    <div class="psychotherapynote">
        <div class="container py-4">
            <h3>Psychotherapy Progress Note</h3>

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
                <div class="col-md-6 py-2">
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

            <div class="row pt-4">
                <div class="col-sm-12">
                    <label class="form-label fw-bolder">Risk Factors</label>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            None
                        </label>
                    </div>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Suicidal Ideation
                        </label>
                    </div>
                    <div class="form-check pb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Homicidal Ideation
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Other
                        </label>
                    </div>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder">Medication Update</label>
                        <textarea class="form-control mb-3" rows="3" required></textarea>
                    </div>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-sm-12">
                    <div class="mb-3">
                        <label class="form-label fw-bolder"> Summary of main themes and content of session</label>
                        <textarea class="form-control mb-3" rows="3" required></textarea>
                    </div>
                </div>
            </div>

            <h4>
                Interventions
            </h4>

            <div class="row py-4">
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                            @click="showmodefocused">
                        <label class="form-check-label" for="flexCheckDefault">
                            Mode Focused
                        </label>
                    </div>
                </div>
                <div class="col-sm-12" v-if="modefocused">
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Getting to know the DPM
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Validating/Understanding the Angry Child Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Helping to empower the Compliant Surrenderer Mode
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Bypassing the DPM
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Guiding/rechanneling the Angry Child Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mindfulness/Relaxation Training/contemplative practice
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Safe Place Imagery
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Helping to vent and diffuse anger
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Overcoming avoidance
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Exploring the Punitive Parent Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    acknowledging my mistakes/miss steps
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    brain, mood based nutritional guidance
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Combatting the Punitive Parent Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Validation of needs and feelings
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Moderating the Demanding Parent Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Connecting with and Playful Child Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    support, guidance for exercise
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Responding to/meeting the need of the VCM
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Empathizing with/Guiding the Impulsive/Undisciplined Child Mode
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Creating/maintaining an “Emotional Home”
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Empathic Confrontation of Overcompensator Modes
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    EMDR
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2">

                        </div>
                        <div class="col-sm-4 border py-2">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Somatic experiencing
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-4 border py-2"></div>
                        <div class="col-sm-4 border py-2"></div>
                    </div>
                </div>
            </div>

            <div class="row pb-4">
                <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                            @click="showschemafocused">
                        <label class="form-check-label" for="flexCheckDefault">
                            Schema Focused
                        </label>
                    </div>
                </div>

                <div class="col-sm-12" v-if="schemafocused">
                    <h4 class="pt-3"> Reducing/Overcoming Negative Schemas
                    </h4>
                    <div class="row">
                        <div class="col-sm border py-2  text-center">
                            <span class="fw-bolder">
                                Disconnection/Rejection
                            </span>
                        </div>
                        <div class="col-sm border py-2 text-center">
                            <span class="fw-bolder">

                                Impaired Autonomy


                            </span>
                        </div>
                        <div class="col-sm border py-2  text-center">
                            <span class="fw-bolder">
                                Excessive Responsibility and Standards
                            </span>
                        </div>
                        <div class="col-sm border py-2  text-center">
                            <span class="fw-bolder">
                                Impaired Limits
                            </span>
                        </div>
                        <div class="col-sm border py-2  text-center">
                            <span class="fw-bolder">
                                Other
                            </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mistrust/Abuse:
                                    developing/maintaining capacity for healthy trust

                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Failure: overcoming avoidance due to fear of failure
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Failure: overcoming avoidance due to fear of failure
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Failure: overcoming avoidance due to fear of failure
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Self Punitiveness: developing self-compassion.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Deprivation:
                                    Validating needs and feelings

                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Failure: moderating unrealistic expectations
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Self-sacrifice: moderating focus on others needs
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Insufficient Self-control: guidance in the development of sufficient impulse control
                                    and self-discipline.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Punitiveness of others: developing understanding, compassion and forgiveness
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Deprivation:
                                    providing warmth and attunement

                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Failure: combatting harsh criticism
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Negativity/Pessimism: developing realistic optimism.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Deprivation: providing strength and guidance
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Dependence: developing confidence and capacity for day to day tasks.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">


                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Approval Seeking/Recognition Seeking: Increasing capacity for self
                                    validation/reinforcement
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Inhibition: facilitating openness, vulnerability, and spontaneity.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Enmeshment: developing a stronger and more independent sense of self
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Defectiveness: developing self acceptance, self compassion and unconditional love
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Abandonment B: developing more confidence in and capacity for independent
                                    functioning.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Social Isolation: developing a sense of belonging. </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Social Isolation: developing a sense of belonging.
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Abandonment A:
                                    developing a secure base/ secure attachment
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Subjugation: increasing assertiveness & self-expression
                                </label>
                            </div>
                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                        <div class="col-sm py-2 border">

                        </div>
                    </div>

                    <h4 class="pt-4">Leveraging/ developing positive schemas</h4>

                    <div class="row">
                        <div class="col-sm-3 border py-2 text-center">
                            <span class="fw-bolder">
                                Connection & Acceptance
                            </span>
                        </div>
                        <div class="col-sm-3 border py-2 text-center">
                            <span class="fw-bolder">
                                Healthy Autonomy & Performance
                            </span>
                        </div>
                        <div class="col-sm-3 border py-2 text-center">
                            <span class="fw-bolder">
                                Realistic Standards and Reciprocity
                            </span>
                        </div>
                        <div class="col-sm-3 border py-2 text-center">
                            <span class="fw-bolder">
                                Proficiency & Reasonable Limits
                            </span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Fulfillment
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Healthy Self reliance/ Competence
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Realistic Expectations
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Success
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Social Belonging
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Healthy Boundaries/Developed Self
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Empathic Consideration
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Healthy Self control
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Emotional Openness
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Stable Attachment
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Self directness
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Healthy Self-interest/ Self-care
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">

                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Self compassion
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 border py-2">

                        </div>
                        <div class="col-sm-3 border py-2">

                        </div>
                        <div class="col-sm-3 border py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Basic health/Optimism
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-3 border py-2">

                        </div>
                    </div>



                </div>


            </div>

            <div class="row pt-4">
                <div class="col-sm-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Needs Met</option>
                        <option value="3">Emotional Nurturance and Unconditional Love</option>
                        <option value="1">Playfulness and Emotional Openness</option>
                        <option value="2">Autonomy Support</option>
                        <option value="3">Autonomy Granting</option>
                        <option value="1">Dependability</option>
                        <option value="2">Intrinsic Worth</option>
                        <option value="3">Confidence & Competence</option>
                    </select>
                </div>

            </div>

            <div class="row  pt-4">
                <div class="col-sm-4">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Outcome/ Progress</option>
                        <option value="1">none</option>
                        <option value="2">a little</option>
                        <option value="3">moderate</option>
                        <option value="2">a lot</option>
                    </select>
                </div>

            </div>

            <div class="row pt-4 pb-4">
                <div class="col-sm-6">
                    <label class="form-label fw-bolded">[—] Sign this form: I, John Henry, Ph.D., Clinical Psychologist, declare this information is accurate and complete. </label>
                    <input type="text" class="form-control" placeholder="Sign Here...">
                </div>
            </div>

            <div class="row py-4">
                <div class="col-sm-12 text-center">
                  <button type="button" class="btn btn-danger m-2">Reset</button>
                  <button type="button" class="btn btn-primary m-2">Submit</button>
                </div>
              </div>




        </div>
    </div>
</template>


<script>
    import {
        ref
    } from 'vue';

    export default {
        setup() {
            const modefocused = ref(false);
            const schemafocused = ref(false);

            function showmodefocused() {
                modefocused.value = !modefocused.value;
            }

            function showschemafocused() {
                schemafocused.value = !schemafocused.value;
            }

            return {
                modefocused,
                showmodefocused,
                showschemafocused,
                schemafocused

            }
        }
    };
</script>