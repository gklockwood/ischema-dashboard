<template>
    <div class="sentforms">
        <div class="container py-4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Recipiant</th>
                    <th scope="col">Form</th>
                    <th scope="col">Date Sent</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Completion Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="form in patientFormStatus" :key="form.id"
                  :id="form.id">
                    <th>{{ form.first_name }} {{ form.last_name }}</th>
                    <th>{{ form.form }}</th>
                    <th>{{ form.date_sent }}</th>
                    <th>{{ form.due_date }}</th>
                    <th :class="`${form.completion_status['false'] ? 'text-danger' : 'text-success'}`">{{ form.completion_status }}</th>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>

<script>
    import patientFormData from '../../data/patient-forms-status.js';



    export default {
        setup() {
            const patientFormStatus = patientFormData;
 

            return {
                patientFormStatus
            }
        }
    };
</script>