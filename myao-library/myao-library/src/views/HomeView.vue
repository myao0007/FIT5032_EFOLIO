<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Library Registeration Form</h1>
                <form @submit.prevent="submitForm">

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" @blur="() => validateName(true)"
                                @input="() => validateName(false)" v-model="formData.username"
                                :class="['form-control', { 'is-invalid': !!errors.username }]" />
                            <div v-if="errors.username" class="invalid-feedback d-block">{{ errors.username }}</div>
                        </div>

                        <div class="col-md-6">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" v-model="formData.gender"
                                @blur="() => validateGender(true)" @change="() => validateGender(false)"
                                :class="{ 'is-invalid': errors.gender }">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <div v-if="errors.gender" class="invalid-feedback d-block">{{ errors.gender }}</div>

                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"
                                @blur="() => validatePassword(true)" @input="() => validatePassword(false)"
                                v-model="formData.password"
                                :class="['form-control', { 'is-invalid': !!errors.password }]" />
                            <div v-if="errors.password" class="invalid-feedback d-block">{{ errors.password }}</div>
                        </div>

                        <div class="col-md-6 col-sm-6">
                            <label for="confirm-password" class="form-label">Confirm password</label>
                            <input type="password" class="form-control" id="confirm-password"
                                v-model="formData.confirmPassword" @blur="() => validateConfirmPassword(true)"
                                :class="['form-control', { 'is-invalid': !!errors.confirmPassword }]" />
                            <div v-if="errors.confirmPassword" class="invalid-feedback d-block">{{
                                errors.confirmPassword }}</div>
                        </div>

                    </div>
                    <div class="row mb-3">

                        <div class="col-md-6">
                            <div class="d-flex align-items-center">

                                <label class="form-label mb-0 me-4">Australian Resident?</label>


                                <div class="d-flex align-items-center gap-4">
                                    <div class="form-check m-0">
                                        <input class="form-check-input me-2" type="radio" id="residentYes" value="Yes"
                                            v-model="formData.isAustralian" @blur="() => validationResident(true)"
                                            @input="() => validationResident(false)"
                                            :class="['form-check-input', { 'is-invalid': !!errors.resident }]" />
                                        <label class="form-check-label" for="residentYes">Yes</label>
                                    </div>

                                    <div class="form-check m-0">
                                        <input class="form-check-input me-2" type="radio" id="residentNo" value="No"
                                            v-model="formData.isAustralian" @blur="() => validationResident(true)"
                                            @input="() => validationResident(false)" />
                                        <label class="form-check-label" for="residentNo">No</label>
                                    </div>
                                </div>
                            </div>


                            <div v-if="errors.resident" class="invalid-feedback d-block">
                                {{ errors.resident }}
                            </div>
                        </div>



                        <!--
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian">
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              
              </div>
            -->


                    </div>

                    <div class="mb-3">
                        <label for="reason" class="form-label">Reason for joining</label>
                        <textarea class="form-control" id="reason" rows="3" @blur="() => validateReason(true)"
                            @input="() => validateReason(false)"
                            :class="['form-control', { 'is-invalid': !!errors.reason }]"
                            v-model="formData.reason"></textarea>
                        <div v-if="errors.reason" class="invalid-feedback d-block">{{ errors.reason }}</div>

                        <!-- green mark for the key word will be typed -->
                        <div class="text-success mt-1" v-if="reasonHasFriend">
                            Great to have a friend
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="suburb" class="form-label">Suburb</label>
                        <input type="text" class="form-control" id="suburb" v-model="formData.suburb" />
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>

                </form>
            </div>
        </div>

        <!--
    
    <div class="row mt-5" v-if="submittedCards.length">
      <div class="d-flex flex-wrap justify-content-start">
        <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
          <div class="card-header">
            User Information
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    -->

        <DataTable v-if="submittedCards.length > 0" :value="submittedCards" class="mt-4" tableStyle="min-width: 56rem">
            <Column field="username" header="Username" />
            <Column field="password" header="Password" />
            <Column field="isAustralian" header="Australian Resident">
                <template #body="{ data }">
                    {{ data.isAustralian }}
                </template>
            </Column>
            <Column field="gender" header="Gender" />
            <Column field="reason" header="Reason" />
            <Column field="suburb" header="Suburb" />
        </DataTable>


    </div>
</template>

<script setup>
import { addUser, existsUser } from '../store/users';
import { ref, computed } from 'vue';

const formData = ref({
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: '',
    reason: '',
    gender: '',
    suburb: ''
});

const submittedCards = ref([]);

/*
submittedCards.value.push({
    username: formData.value.username,
    password: formData.value.password,
    isAustralian: formData.value.isAustralian,
    gender: formData.value.gender,
    reason: formData.value.reason
    

})
 */

const submitForm = () => {
    validateName(true);
    validatePassword(true);
    validateConfirmPassword(true);
    validationResident(true);
    validateGender(true);
    validateReason(true)
    if (!errors.value.username && !errors.value.password && !errors.value.gender && !errors.value.reason && !errors.value.resident) {
        addUser({
            username: formData.value.username,
            password: formData.value.password,
            isAustralian: formData.value.isAustralian,
            gender: formData.value.gender,
            reason: formData.value.reason,
            suburb: formData.value.suburb

        }

        )
        submittedCards.value.push({ ...formData.value });
        clearForm();
    }



};

const clearForm = () => {
    formData.value = {
        username: '',
        password: '',
        isAustralian: '',
        reason: '',
        gender: '',
        confirmPassword: '',
        suburb: ''

    }
}

const errors = ref({
    username: null,
    password: null,
    confirmPassword: null,
    resident: null,
    gender: null,
    reason: null,
}

);

const validateName = (blur) => {
    if (formData.value.username.length < 3) {
        if (blur) errors.value.username = "Name must be at least 3 characters";
    } else {
        errors.value.username = null;

    }
};

const validatePassword = (blur) => {
    const password = formData.value.password;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        if (blur) errors.value.password = `Password must be at least ${minLength} characters long`;
    } else if (!hasUppercase) {
        if (blur) errors.value.password = "Password must contain at least one uppercase letter";
    } else if (!hasLowercase) {
        if (blur) errors.value.password = "Password must contain at least one lowercase letter";
    } else if (!hasNumber) {
        if (blur) errors.value.password = "Password must contain at least one number";
    } else if (!hasSpecialChar) {
        if (blur) errors.value.password = "Password must contain at least one special character";
    } else {
        errors.value.password = null;
    }
};

const validateConfirmPassword = (blur) => {
    if (formData.value.password !== formData.value.confirmPassword) {
        if (blur) errors.value.confirmPassword = 'Passwords do not match'
    } else {
        errors.value.confirmPassword = null
    }
}

const validationResident = (blur) => {
    const resident = formData.value.isAustralian
    if (!resident) {
        if (blur) errors.value.resident = "Resident Type is required";
    } else {
        errors.value.resident = null;
    }
}

const validateGender = (blur) => {
    const gender = formData.value.gender;

    if (!gender) {
        if (blur) errors.value.gender = "Gender is required";
    } else {
        errors.value.gender = null;
    }
};

const validateReason = (blur) => {
    const reason = formData.value.reason;

    if (!reason) {
        if (blur) errors.value.reason = "Reason is required";
    } else if (reason.length > 200) {
        if (blur) errors.value.reason = "Reason must be 50 characters or fewer";
    }
    else {
        errors.value.reason = null;


    }
};


const reasonHasFriend = computed(() =>
    formData.value.reason.toLowerCase().includes('friend')
);







</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #275FDA;
    color: white;
    padding: 10px;
    border-radius: 10px 10px 0 0;
}

.list-group-item {
    padding: 10px;
}
</style>