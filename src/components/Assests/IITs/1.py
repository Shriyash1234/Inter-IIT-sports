import os

# Define a dictionary mapping IIT names to their abbreviations
iit_abbreviations = {
    "IIT Kharagpur": "IITKGP",
    "IIT Bombay": "IITB",
    "IIT Madras": "IITM",
    "IIT Kanpur": "IITK",
    "IIT Delhi": "IITD",
    "IIT Guwahati": "IITG",
    "IIT Roorkee": "IITR",
    "IIT Ropar": "IITRPR",
    "IIT Bhubaneswar": "IITBBS",
    "IIT Gandhinagar": "IITGN",
    "IIT Hyderabad": "IITH",
    "IIT Jodhpur": "IITJ",
    "IIT Patna": "IITP",
    "IIT Indore": "IITI",
    "IIT Mandi": "IITMD",
    "IIT Varanasi": "IITBHU",
    "IIT Palakkad": "IITPKD",
    "IIT Tirupati": "IITT",
    "IIT Dhanbad": "IITISM",
    "IIT Bhilai": "IITBH",
    "IIT Dharwad": "IITDH",
    "IIT Jammu": "IITJMU",
    "IIT Goa": "IITGOA"
}

# Define the folder containing the images
folder_path = "src/components/Assests/IITs"  # Replace with the actual path to your folder

# Define a list of IIT abbreviations in the order they appear in your list
iit_abbreviations = ["IITKGP", "IITB", "IITM", "IITK", "IITD", "IITG", "IITR", "IITRPR", "IITBBS", "IITGN", "IITH", "IITJ", "IITP", "IITI", "IITMD", "IITBHU", "IITPKD", "IITT", "IITISM", "IITBH", "IITDH", "IITJMU", "IITGOA"]

# Loop through the images in the folder
for i in range(1, 24):
    old_filename = os.path.join(folder_path, f"img{i}.jpg")
    
    # Check if the index is within the range of the abbreviations list
    if 0 <= i - 1 < len(iit_abbreviations):
        new_filename = os.path.join(folder_path, f"{iit_abbreviations[i - 1]}.jpg")
        
        # Rename the file
        os.rename(old_filename, new_filename)

print("Images renamed successfully.")