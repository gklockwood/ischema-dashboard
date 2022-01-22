<template>
  <div class="SchemaMode-Plan-1">
    <div class="container py-4">
      <h3>Schema:Mode Conceptualization and Treatment Plan-1. Presenting Problems and Strengths</h3>

      <form class="pt-4">
        <div class="mb-3">
          <label class="form-label fw-bolder">Presenting Problem(s)</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <b class="py-3 d-block">For each current problem or symptom, clarify the nature of the problem and how it
          creates difficulties in the client’s life. </b>
        <div class="mb-3">
          <label class="form-label fw-bolder">1. Life Problem/Symptom: </label>
          <textarea class="form-control mb-3" rows="3" placeholder="Symptom Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Symptom Description..." required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">2. Life Problem/Symptom: </label>
          <textarea class="form-control mb-3" rows="3" placeholder="Symptom Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Symptom Description..." required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">3. Life Problem/Symptom: </label>
          <textarea class="form-control mb-3" rows="3" placeholder="Symptom Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Symptom Description..." required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">4. Other Life Problem/Symptom: </label>
          <textarea class="form-control mb-3" rows="3" placeholder="Symptom Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Symptom Description..." required></textarea>
        </div>
        <b class="py-3 d-block">Presenting Strengths: Major areas of satisfaction, fulfillment and/or success. (Results
          for the IPIP can be helpful here)
        </b>
        <div class="mb-3">
          <label class="form-label fw-bolder">IPIP profile</label>
          <textarea class="form-control mb-3" rows="3"></textarea>
        </div>
        <b class="py-3 d-block">For each strength, elaborate on the nature of this capacity and how it facilitates or
          enriches the client’s life.
        </b>
        <div class="mb-3">
          <label class="form-label fw-bolder">1. Positive Life Pattern:</label>
          <textarea class="form-control mb-3" rows="3" placeholder="Positive Life Pattern Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Positive Life Pattern Description..."
            required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">2. Positive Life Pattern:</label>
          <textarea class="form-control mb-3" rows="3" placeholder="Positive Life Pattern Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Positive Life Pattern Description..."
            required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">3. Positive Life Pattern:</label>
          <textarea class="form-control mb-3" rows="3" placeholder="Positive Life Pattern Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Positive Life Pattern Description..."
            required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder">4. Positive Life Pattern:</label>
          <textarea class="form-control mb-3" rows="3" placeholder="Positive Life Pattern Label..." required></textarea>
          <textarea class="form-control" rows="3" placeholder="Positive Life Pattern Description..."
            required></textarea>
        </div>
      </form>

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

<style>
  .form label {
    max-width: 62px;
  }
</style>