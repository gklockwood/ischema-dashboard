<template>
    <div class="faq">
        <div class="container py-4 securecall">
            <div class="row">

                <div class="col-sm-4 d-flex justify-content-center align-items-center">
                    <div class="text-center w-100">
                        <h3 class="d-block fw-bolder">Telehealth Appointment</h3>
                        <h4 class="d-block">Dec 6th @ 10:00 AM (EST)</h4>
                        <div class="card shadow border-0" style="min-height: auto">
                            <div class="card-title text-white bg-secondary rounded-top d-flex">
                                <div class="col-sm-6 d-flex align-items-center p-4">
                                    <h4 class="fw-light mb-0">Your a bit early</h4>
                                </div>
                                <div class="col-sm-6 d-flex justify-content-end">
                                    <div class="icontypica shadow">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                You will be able to join your session 10 minutes before the scheduled time.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8 d-flex justify-content-center align-items-center">





                    <div style="background-color: black;height:100%;width:100%;min-height:500px">

                        <div class="d-flex justify-content-end p-3">
                            <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                <i class="fas fa-cog"></i> Settings
                            </button>
                        </div>


                        <div class="d-flex" style="background-color: black;height:100%;width:100%">
                            <div class="d-flex text-center align-self-sm-end justify-content-center p-3 w-100">
                                <div>
                                    <button type="button" class="btn btn-sm btn-light shadow-sm rounded-pill mx-1"
                                        style="width:35px;height:35px"><i class="fas fa-microphone"></i></button>
                                    <button type="button" class="btn btn-sm btn-light shadow-sm rounded-pill mx-1"
                                        style="width:35px;height:35px"><i class="fas fa-video"></i></button>
                                </div>

                            </div>
                        </div>

                    </div>



                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="vertical-alignment-helper">
                        <div class="modal-dialog modal-lg  vertical-align-center">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Settings</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
    
    
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                                aria-orientation="vertical">
                                                <button class="nav-link active" id="v-pills-video-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-video" type="button" role="tab"
                                                    aria-controls="v-pills-home" aria-selected="true"><i
                                                        class="fas fa-video me-1"></i> Video</button>
                                                <button class="nav-link" id="v-pills-audio-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-audio" type="button" role="tab"
                                                    aria-controls="v-pills-profile" aria-selected="false"><i
                                                        class="fas fa-microphone me-1"></i> Audio</button>
                                                <button class="nav-link" id="v-pills-background-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-background" type="button" role="tab"
                                                    aria-controls="v-pills-messages" aria-selected="false"><i
                                                        class="fas fa-portrait  me-1"></i> Background</button>
                                                <button class="nav-link" id="v-pills-General-tab" data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-General" type="button" role="tab"
                                                    aria-controls="v-pills-settings" aria-selected="false"><i
                                                        class="fas fa-cog  me-1"></i> General</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane fade show active" id="v-pills-video" role="tabpanel"
                                                    aria-labelledby="v-pills-video-tab">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <h4>Video Settings</h4>
                                                        </div>
                                                    </div>
                                                    <div class="row pt-1">
                                                        <div class="col-sm">
                                                            <label for="Camera Settings" class="pb-1 fw-bolder">Select
                                                                Camera</label>
                                                            <select class="form-select" aria-label="Camera Settings">
                                                                <option selected>FaceTime HD Camera</option>
                                                                <option value="1">Built in System Camera</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row pt-3">
                                                        <div class="col-sm">
                                                            <label for="Camera Settings" class="pb-1 fw-bolder">Select Video
                                                                Quality</label>
                                                            <div class="form-check pt-2">
                                                                <input class="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="autoradio">
                                                                <label class="form-check-label" for="autoradio">
                                                                    Auto
                                                                </label>
                                                            </div>
                                                            <div class="form-check pt-2">
                                                                <input class="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="standardradio">
                                                                <label class="form-check-label" for="standardradio">
                                                                    Standard-definition (SD)
                                                                </label>
                                                            </div>
                                                            <div class="form-check pt-2">
                                                                <input class="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="highdefradio" checked>
                                                                <label class="form-check-label" for="highdefradio">
                                                                    High-definition (HD)
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-audio" role="tabpanel"
                                                    aria-labelledby="v-pills-audio-tab">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <h4>Audio Settings</h4>
                                                        </div>
                                                    </div>
                                                    <div class="row pt-1">
                                                        <div class="col-sm">
                                                            <label for="Camera Settings"
                                                                class="pb-1 fw-bolder d-block">Speaker</label>
                                                            <div class="row pt-2">
                                                                <div class="col-sm-3">
                                                                    <button class="btn btn-light w-100">
                                                                        Test Speaker
                                                                    </button>
                                                                </div>
                                                                <div class="col-sm-9">
                                                                    <select class="form-select"
                                                                        aria-label="Camera Settings">
                                                                        <option selected>Headphones (PLT Edge)</option>
                                                                        <option value="1">Built in System Audio</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-sm-3 pt-3 text-end">
                                                                    <label for="Camera Settings"
                                                                        class="pb-1 fw-bolder">Output Level:</label>
                                                                </div>
                                                                <div class="col-sm-9 pt-3">
                                                                    <div class="progress"
                                                                        style="margin-top:6px;position:relative">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-3 pt-3 text-end">
                                                                    <label for="Camera Settings"
                                                                        class="pb-1 fw-bolder">Volume:</label>
                                                                </div>
                                                                <div class="col-sm-9 pt-3">
                                                                    <input type="range" class="form-range"
                                                                        id="customRange1">
                                                                </div>
                                                                <div class="col-sm-12 pt-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="" id="audiocheck">
                                                                        <label class="form-check-label ps-1"
                                                                            for="audiocheck">
                                                                            Use separate audio device to play ringtone
                                                                            simultaneously
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
                                                    <div class="row pt-3">
                                                        <div class="col-sm">
                                                            <label for="Camera Settings"
                                                                class="pb-1 fw-bolder d-block">Microphone</label>
                                                            <div class="row pt-2">
                                                                <div class="col-sm-3">
                                                                    <button class="btn btn-light w-100">
                                                                        Test Mic
                                                                    </button>
                                                                </div>
                                                                <div class="col-sm-9">
                                                                    <select class="form-select"
                                                                        aria-label="Camera Settings">
                                                                        <option selected>Headphones (PLT Edge)</option>
                                                                        <option value="1">Built in System Audio</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-sm-3 pt-3 text-end">
                                                                    <label for="Camera Settings"
                                                                        class="pb-1 fw-bolder">Input Level:</label>
                                                                </div>
                                                                <div class="col-sm-9 pt-3">
                                                                    <div class="progress"
                                                                        style="margin-top:6px;position:relative">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-3 pt-3 text-end">
                                                                    <label for="Camera Settings"
                                                                        class="pb-1 fw-bolder">Volume:</label>
                                                                </div>
                                                                <div class="col-sm-9 pt-3">
                                                                    <input type="range" class="form-range"
                                                                        id="customRange1">
                                                                </div>
                                                                <div class="col-sm-12 pt-3">
                                                                    <div class="form-check">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="" id="micecheck">
                                                                        <label class="form-check-label ps-1"
                                                                            for="micecheck">
                                                                            Automatically adjust microphone volume
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
    
    
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-background" role="tabpanel"
                                                    aria-labelledby="v-pills-background-tab">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <h4>Background Settings</h4>
                                                        </div>
                                                        <div class="row pt-1">
                                                            <div class="col-sm">
                                                                <div style="background:black;width:100%;height:300px;display:block"
                                                                    class="d-flex justify-content-center align-items-center">
                                                                    <h4 class="text-white">Show Video Preview Here</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row pt-3">
                                                            <div class="col-sm">
                                                                <div class="form-check -t-3">
                                                                    <input class="form-check-input" type="radio"
                                                                        name="flexRadioDefault" id="defaultvid" checked>
                                                                    <label class="form-check-label ps-1" for="defaultvid"
                                                                        style="margin-top:2px;position: relative;">
                                                                        Default Video
                                                                    </label>
                                                                </div>
                                                                <div class="form-check pt-2">
                                                                    <input class="form-check-input" type="radio"
                                                                        name="flexRadioDefault" id="blurvid">
                                                                    <label class="form-check-label ps-1" for="blurvid"
                                                                        style="margin-top:2px;position: relative;">
                                                                        Blur Background
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-General" role="tabpanel"
                                                    aria-labelledby="v-pills-General-tab">
                                                    <div class="row">
                                                        <div class="col-sm">
                                                            <h4>General Settings</h4>
                                                            <div class="row pt-3">
                                                                <div class="col-sm-12">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            id="showtimer">
                                                                        <label class="form-check-label"
                                                                            for="showtimer">Show Appointment Timer</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-12 pt-2">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            id="notificationsvid">
                                                                        <label class="form-check-label"
                                                                            for="notificationsvid">Show previews of new chat messages</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-12 pt-2">
                                                                    <div class="form-check form-switch">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            id="Monitors">
                                                                        <label class="form-check-label"
                                                                            for="Monitors">Use Dual Monitors</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
    
    
    
    
    
    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal"><i
                                            class="fas fa-times me-1"></i> Cancel</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>


            </div>
        </div>
    </div>
</template>

