export const emailTemplate = (message, email, name) => {
  return `<div>   
      <p><b>${name}</b> vous a envoyé un message.</p>
      <p>Son adresse mail pour le recontacter: <b>${email}</b></p>
      <p><b>Message:</b> </p>
      <p>${message}</p>
    </div>
    `
}
