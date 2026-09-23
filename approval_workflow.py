def approval_workflow(lead):
    if lead['manager_approval'] == 'pending':
        notify_manager(lead)