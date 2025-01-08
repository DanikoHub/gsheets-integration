import requests

link = 'https://script.google.com/macros/s/AKfycbxrIS8NvI7BfEIuboyFXMbU9bvyJyUdvaraqyqW9ZTfIB8c0AToUUtt1r05g07JjLZk7A/exec'

r = requests.get(link)

last_row = r.json()["last_row"]
print(last_row)
issue_number = '89999'
jira_number = ''
issue_desc = 'Долго грузится реестр'
team_name = 'PCO'

r_post = requests.post(link,
    headers = {
        "Content-Type" : "application/json",
        "Connection" : "keep-alive",
        "Accept" : "*/*",
        "Accept-Encoding" : "gzip, deflate, br",
        "User-Agent" : "PostmanRuntime/7.43.1",
        "Content-Length" : "100",
        "Host" : "script.google.com"
    },
    json={"row": int(last_row) + 1,
        "issue_number" : issue_number,
        "jira_number" : jira_number,
        "issue_desc" : issue_desc,
        "team_name" : team_name
    })

print(r_post.text)
