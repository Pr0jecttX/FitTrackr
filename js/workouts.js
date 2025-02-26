// Workout data
const WORKOUTS = {
    beginner: [
        {
            name: 'Full Body Basics',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
            exercises: [
                {name: 'Bodyweight Squats', sets: 3, reps: 12},
                {name: 'Push-ups', sets: 3, reps: 10},
                {name: 'Walking Lunges', sets: 3, reps: 10},
                {name: 'Plank Hold', sets: 3, time: '30 seconds'},
                {name: 'Mountain Climbers', sets: 3, reps: 20}
            ]
        },
        {
            name: 'Core Focus',
            image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec',
            exercises: [
                {name: 'Crunches', sets: 3, reps: 15},
                {name: 'Bird Dogs', sets: 3, reps: 12},
                {name: 'Dead Bug', sets: 3, reps: 10},
                {name: 'Russian Twists', sets: 3, reps: 20},
                {name: 'Superman Hold', sets: 3, time: '20 seconds'},
                {name: 'Leg Raises', sets: 3, reps: 15}
            ]
        },
        {
            name: 'Cardio Start',
            image: 'https://images.unsplash.com/photo-1434596922112-19c563067271',
            exercises: [
                {name: 'Jumping Jacks', sets: 3, time: '1 minute'},
                {name: 'High Knees', sets: 3, time: '30 seconds'},
                {name: 'Burpees', sets: 3, reps: 8},
                {name: 'Jump Rope', sets: 3, time: '1 minute'},
                {name: 'March in Place', sets: 3, time: '1 minute'},
                {name: 'Mountain Climbers', sets: 3, time: '45 seconds'}
            ]
        },
        {
            name: 'Flexibility Focus',
            image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3',
            exercises: [
                {name: 'Cat-Cow Stretch', sets: 3, reps: 10},
                {name: 'Downward Dog', sets: 3, time: '30 seconds'},
                {name: 'Child\'s Pose', sets: 3, time: '30 seconds'},
                {name: 'Standing Forward Bend', sets: 3, time: '30 seconds'},
                {name: 'World\'s Greatest Stretch', sets: 3, reps: 5},
                {name: 'Hip Opener Sequence', sets: 3, time: '45 seconds'}
            ]
        },
        {
            name: 'Lower Body Start',
            image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
            exercises: [
                {name: 'Bodyweight Squats', sets: 3, reps: 15},
                {name: 'Glute Bridges', sets: 3, reps: 12},
                {name: 'Calf Raises', sets: 3, reps: 20},
                {name: 'Step-Ups', sets: 3, reps: 10},
                {name: 'Wall Sits', sets: 3, time: '30 seconds'},
                {name: 'Knee Drives', sets: 3, reps: 15}
            ]
        },
        {
            name: 'Upper Body Intro',
            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
            exercises: [
                {name: 'Incline Push-ups', sets: 3, reps: 12},
                {name: 'Wall Push-ups', sets: 3, reps: 15},
                {name: 'Arm Circles', sets: 3, time: '30 seconds'},
                {name: 'Band Pull-Aparts', sets: 3, reps: 15},
                {name: 'Shoulder Taps', sets: 3, reps: 20}
            ]
        },
        {
            name: 'Balance & Stability',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
            exercises: [
                {name: 'Single-Leg Stand', sets: 3, time: '30 seconds'},
                {name: 'Walking Heel-to-Toe', sets: 3, reps: 20},
                {name: 'Bird Dog Hold', sets: 3, time: '20 seconds'},
                {name: 'Standing Leg Raises', sets: 3, reps: 12},
                {name: 'Toe Taps', sets: 3, reps: 20}
            ]
        },
        {
            name: 'Recovery & Mobility',
            image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5',
            exercises: [
                {name: 'Foam Rolling - Legs', sets: 3, time: '1 minute'},
                {name: 'Hip Circles', sets: 3, reps: 10},
                {name: 'Ankle Mobility', sets: 3, reps: 15},
                {name: 'Thoracic Spine Rotation', sets: 3, reps: 10},
                {name: 'Wrist Mobility', sets: 3, reps: 12},
                {name: 'Neck Stretches', sets: 3, time: '30 seconds'}
            ]
        }
    ],
    intermediate: [
        {
            name: 'Strength Builder',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
            exercises: [
                {name: 'Dumbbell Squats', sets: 4, reps: 12},
                {name: 'Dumbbell Rows', sets: 4, reps: 12},
                {name: 'Romanian Deadlifts', sets: 4, reps: 12},
                {name: 'Push-ups', sets: 4, reps: 15},
                {name: 'Plank to Downward Dog', sets: 3, reps: 10},
                {name: 'Lateral Raises', sets: 3, reps: 12}
            ]
        },
        {
            name: 'HIIT Challenge',
            image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd',
            exercises: [
                {name: 'Kettlebell Swings', sets: 4, reps: 15},
                {name: 'Box Jumps', sets: 4, reps: 12},
                {name: 'Battle Ropes', sets: 4, time: '30 seconds'},
                {name: 'Medicine Ball Slams', sets: 4, reps: 15},
                {name: 'Burpee Pull-ups', sets: 3, reps: 8},
                {name: 'Sprinter Starts', sets: 4, reps: 10}
            ]
        },
        {
            name: 'Endurance Plus',
            image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4',
            exercises: [
                {name: 'Jump Squats', sets: 4, reps: 20},
                {name: 'Push-up to Row', sets: 4, reps: 12},
                {name: 'Dumbbell Lunges', sets: 4, reps: 15},
                {name: 'Mountain Climbers', sets: 4, time: '45 seconds'},
                {name: 'Renegade Rows', sets: 3, reps: 12},
                {name: 'Plank Hold', sets: 3, time: '1 minute'}
            ]
        },
        {
            name: 'Core Power',
            image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc',
            exercises: [
                {name: 'Hanging Leg Raises', sets: 4, reps: 12},
                {name: 'Ab Wheel Rollouts', sets: 4, reps: 10},
                {name: 'Turkish Get-Ups', sets: 3, reps: 5},
                {name: 'Windshield Wipers', sets: 3, reps: 12},
                {name: 'Dragon Flags', sets: 3, reps: 8},
                {name: 'Side Plank Rotations', sets: 3, reps: 10}
            ]
        },
        {
            name: 'Explosive Power',
            image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e',
            exercises: [
                {name: 'Split Jumps', sets: 4, reps: 12},
                {name: 'Medicine Ball Chest Throws', sets: 4, reps: 10},
                {name: 'Box Jump Overs', sets: 4, reps: 15},
                {name: 'Clap Push-ups', sets: 3, reps: 8},
                {name: 'Kettlebell Clean and Press', sets: 4, reps: 10}
            ]
        },
        {
            name: 'Functional Strength',
            image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110',
            exercises: [
                {name: 'Sandbag Clean and Press', sets: 4, reps: 10},
                {name: 'TRX Row to Y-Fly', sets: 4, reps: 12},
                {name: 'Single-Leg RDL', sets: 4, reps: 10},
                {name: 'Racked Carries', sets: 3, time: '45 seconds'},
                {name: 'Medicine Ball Rotations', sets: 4, reps: 15},
                {name: 'Bear Crawls', sets: 3, time: '30 seconds'}
            ]
        }
    ],
    advanced: [
        {
            name: 'Power Performance',
            image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
            exercises: [
                {name: 'Barbell Squats', sets: 5, reps: 5},
                {name: 'Deadlifts', sets: 5, reps: 5},
                {name: 'Bench Press', sets: 5, reps: 5},
                {name: 'Pull-ups', sets: 4, reps: 12},
                {name: 'Military Press', sets: 4, reps: 8},
                {name: 'Power Cleans', sets: 4, reps: 6}
            ]
        },
        {
            name: 'CrossFit Style',
            image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
            exercises: [
                {name: 'Clean and Jerk', sets: 5, reps: 5},
                {name: 'Muscle-ups', sets: 4, reps: 8},
                {name: 'Handstand Push-ups', sets: 4, reps: 8},
                {name: 'Double Unders', sets: 4, reps: 50},
                {name: 'Thrusters', sets: 4, reps: 12},
                {name: 'Rope Climbs', sets: 3, reps: 3}
            ]
        },
        {
            name: 'Beast Mode',
            image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
            exercises: [
                {name: 'Power Cleans', sets: 5, reps: 5},
                {name: 'Ring Muscle-ups', sets: 4, reps: 6},
                {name: 'Pistol Squats', sets: 4, reps: 8},
                {name: 'Overhead Squats', sets: 4, reps: 8},
                {name: 'Bar Muscle-ups', sets: 3, reps: 5},
                {name: 'Heavy Turkish Get-ups', sets: 3, reps: 5}
            ]
        },
        {
            name: 'Strength Mastery',
            image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61',
            exercises: [
                {name: 'Front Squats', sets: 5, reps: 5},
                {name: 'Strict Press', sets: 5, reps: 5},
                {name: 'Weighted Pull-ups', sets: 4, reps: 8},
                {name: 'Romanian Deadlifts', sets: 4, reps: 8},
                {name: 'Clean Pulls', sets: 4, reps: 6},
                {name: 'L-Sits', sets: 4, time: '30 seconds'},
                {name: 'Muscle Snatch', sets: 4, reps: 5}
            ]
        },
        {
            name: 'Elite Conditioning',
            image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
            exercises: [
                {name: 'Assault Bike Sprints', sets: 6, time: '30 seconds'},
                {name: 'Devil Press', sets: 5, reps: 10},
                {name: 'Wall Ball Shots', sets: 5, reps: 20},
                {name: 'Rowing Sprints', sets: 6, time: '250m'},
                {name: 'Box Jump Overs', sets: 5, reps: 15},
                {name: 'Burpee Pull-ups', sets: 4, reps: 10}
            ]
        },
        {
            name: 'Olympic Lifting',
            image: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc',
            exercises: [
                {name: 'Snatch', sets: 6, reps: 3},
                {name: 'Clean and Jerk', sets: 6, reps: 3},
                {name: 'Snatch Pulls', sets: 4, reps: 5},
                {name: 'Clean Pulls', sets: 4, reps: 5},
                {name: 'Overhead Squats', sets: 4, reps: 6},
                {name: 'Split Jerks', sets: 4, reps: 5},
                {name: 'Muscle Snatch', sets: 3, reps: 5}
            ]
        },
        // {
        //     name: 'Gymnastic Strength',
        //     image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1',
        //     exercises: [
        //         {name: 'Ring Strength Complex', sets: 4, reps: 5},
        //         {name: 'Handstand Push-ups', sets: 5, reps: 8},
        //         {name: 'Front Lever Progressions', sets: 4, time: '20 seconds'},
        //         {name: 'Planche Progressions', sets: 4, time: '20 seconds'},
        //         {name: 'Strict Muscle-ups', sets: 4, reps: 5},
        //         {name: 'Back Lever Hold', sets: 4, time: '15 seconds'},
        //         {name: 'Ring Iron Cross Prep', sets: 3, time: '10 seconds'}
        //     ]
        // }
    ]
};

function loadWorkouts() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="container my-5">
            <h2 class="text-center mb-5">Workout Programs</h2>

            <ul class="nav nav-pills mb-4 justify-content-center" id="workoutTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#beginner">Beginner</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#intermediate">Intermediate</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="pill" data-bs-target="#advanced">Advanced</button>
                </li>
            </ul>

            <div class="tab-content">
                ${Object.entries(WORKOUTS).map(([level, workouts]) => `
                    <div class="tab-pane fade ${level === 'beginner' ? 'show active' : ''}" id="${level}">
                        <div class="row g-4">
                            ${workouts.map(workout => `
                                <div class="col-md-4">
                                    <div class="card workout-card h-100">
                                        <img src="${workout.image}" 
                                             class="card-img-top exercise-image" 
                                             alt="${workout.name}">
                                        <div class="card-body">
                                            <h5 class="card-title">${workout.name}</h5>
                                            <div class="exercise-list">
                                                ${workout.exercises.map(exercise => `
                                                    <div class="exercise-item mb-2">
                                                        <h6>${exercise.name}</h6>
                                                        <p class="mb-0">
                                                            ${exercise.sets} sets x 
                                                            ${exercise.reps ? exercise.reps + ' reps' : exercise.time}
                                                        </p>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
