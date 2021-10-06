<template>
  <div class="survey">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-sm">
          <div class="surveywrap">
            <h1 class="likert-header">This is a Likert Scale survey</h1>
            <form action="">
              <label class="statement">This HTML Likert scale is easy to use.</label>

              <ul class='likert'>
                <li class="form-check">
                  <input type="radio" name="likert" value="1" class="form-check-input">
                  <label class="form-check-label">1</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="2" class="form-check-input">
                  <label class="form-check-label">2</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="3" class="form-check-input">
                  <label class="form-check-label">3</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="4" class="form-check-input">
                  <label class="form-check-label">4</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="5" class="form-check-input">
                  <label class="form-check-label">5</label>
                </li>
                <li>
                  <input type="radio" name="likert" value="6" class="form-check-input">
                  <label class="form-check-label">6</label>
                </li>
              </ul>
             
              <div class="buttons">
                <button class="clear">Clear</button>
                <button class="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
