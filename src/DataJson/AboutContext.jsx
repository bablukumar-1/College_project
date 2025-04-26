const information = [
    {
        title: '📌 Overview:',
        content: [
            {

                description: "That uses face recognition technology to identify and count the number of individuals present in a live video feed. It can be used in scenarios such as monitoring classrooms, offices, or public spaces to get an accurate headcount without manual effort.",
            }
        ],
    },
    {
        title: '🚀 Key Features :',
        content: [
            
            {

                description: 'Real-time human detection using camera feed.'
            },
            {

                description: 'Face recognition to differentiate and count unique individuals.'
            },
            {

                description: 'Displays the role (e.g., Teacher or Student) based on the matched face.'
            },
            {

                description: 'Automatically updates the count as people enter or leave.'
            },
            {

                description: 'Responsive UI showing live feed and user information.'
            },
            {

                description: 'Clean and responsive UI with Tailwind CSS.'
            },
            {

                description: 'Scalable architecture for large-scale environments.'
            },
        ],
    },
    {
        title: '🛠️ Tech Stack :',
        content: [
            
            {

                description: 'Frontend: React.js, Tailwind CSS, GSAP'
            },
            {

                description: 'Backend: Node.js, Express.js'
            },
            {

                description: 'Face Detection/Recognition: face-api.js / OpenCV (whichever you used ).'
            },
            {

                description: 'Database: MongoDB (for storing known face data and role info)'
            },
           
        ],
    },
    {
        title: '⚙️ How It Works :',
        content: [
            
            {

                description: 'The camera captures real-time video feed.'
            },
            {

                description: 'Faces are detected using a pre-trained model.'
            },
            {

                description: 'The system compares detected faces with stored embeddings to identify individuals'
            },
            {

                description: 'It displays their role (e.g., Teacher, Student) and updates the human count.'
            },
            {

                description: 'Duplicate entries are avoided using facial comparison techniques.'
            },
            
           
        ],
    },
    {
        title: '💼 Professional Use Cases :',
        content: [
            
            {

                description: 'Educational Institutions: Monitor student and faculty presence without manual attendance systems.'
            },
            {

                description: 'Corporate Offices: Count employees and visitors in real-time for occupancy control and safety compliance.'
            },
            {

                description: 'Smart Buildings: Automated headcount for efficient lighting, HVAC, and resource management.'
            },
            {

                description: 'Healthcare Facilities: Monitor patient, staff, and visitor flow for better management and safety.'
            },
            {

                description: 'Retail Stores & Malls: Analyze customer traffic patterns and staff activity during operational hours.'
            },
            
           
        ],
    },
    {
        title: '🌱 Future Scope :',
        content: [
            
            {

                description: 'Add entry/exit tracking for more accurate movement monitoring.'
            },
            {

                description: 'Introduce heatmaps and analytics dashboards for visual insights.'
            },
            {

                description: 'Integrate with CCTV and IoT systems for smart surveillance.'
            },
            {

                description: 'Enable liveness detection to prevent spoofing using photos or videos.'
            },
            {

                description: 'Provide alert notifications when unknown or unauthorized individuals are detected.'
            },
            
           
        ],
    },
 
    
]

export default information;